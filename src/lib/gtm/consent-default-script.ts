/**
 * Inline Consent Mode v2 przed gtag.js i GTM (ładowany przez next/script beforeInteractive).
 * Ustawia stub gtag, consent default (denied) i - przy zapisanej zgodzie - consent update
 * + eventy dla GTM/Ads. Wysyłkę page_view GA4 robi React (sendGa4PageView), niezależnie.
 */
export function buildConsentDefaultInlineScript(): string {
  return `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('js',new Date());gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',security_storage:'granted',ads_data_redaction:true,url_passthrough:true,wait_for_update:2000});try{var m=document.cookie.match(/(?:^|; )hydrobagger_consent=([^;]*)/);if(m){var c=JSON.parse(decodeURIComponent(m[1]));if(c&&c.v===1){gtag('consent','update',{ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied',analytics_storage:c.analytics?'granted':'denied',security_storage:'granted',ads_data_redaction:!c.marketing});if(c.analytics){dataLayer.push({event:'consent_analytics_granted'});}if(c.marketing){dataLayer.push({event:'consent_marketing_granted'});}}}catch(e){}})();`;
}
