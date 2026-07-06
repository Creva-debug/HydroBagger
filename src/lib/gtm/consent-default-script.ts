/**
 * Inline Consent Mode v2 przed GTM (patrz root layout <head>).
 * ads_data_redaction + url_passthrough: rekomendacja Google przy Advanced Consent Mode.
 */
export function buildConsentDefaultInlineScript(): string {
  return `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',security_storage:'granted',ads_data_redaction:true,url_passthrough:true,wait_for_update:2000});try{var m=document.cookie.match(/(?:^|; )hydrobagger_consent=([^;]*)/);if(m){var c=JSON.parse(decodeURIComponent(m[1]));if(c&&c.v===1){gtag('consent','update',{ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied',analytics_storage:c.analytics?'granted':'denied',security_storage:'granted',ads_data_redaction:!c.marketing});dataLayer.push({event:'consent_defaults_restored',analytics_storage:c.analytics?'granted':'denied'});}}}catch(e){}})();`;
}
