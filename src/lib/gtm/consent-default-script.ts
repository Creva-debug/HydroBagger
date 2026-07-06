import { GA4_MEASUREMENT_ID } from "@/lib/gtm/ga4-config";

/**
 * Inline Consent Mode v2 + kolejka gtag przed gtag.js (patrz root layout <head>).
 * Po przywróceniu zgody analitycznej z cookie od razu gtag config + page_view.
 */
export function buildConsentDefaultInlineScript(): string {
  const id = GA4_MEASUREMENT_ID;
  return `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;gtag('js',new Date());gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',security_storage:'granted',ads_data_redaction:true,url_passthrough:true,wait_for_update:2000});try{var m=document.cookie.match(/(?:^|; )hydrobagger_consent=([^;]*)/);if(m){var c=JSON.parse(decodeURIComponent(m[1]));if(c&&c.v===1){gtag('consent','update',{ad_storage:c.marketing?'granted':'denied',ad_user_data:c.marketing?'granted':'denied',ad_personalization:c.marketing?'granted':'denied',analytics_storage:c.analytics?'granted':'denied',security_storage:'granted',ads_data_redaction:!c.marketing});dataLayer.push({event:'consent_defaults_restored',analytics_storage:c.analytics?'granted':'denied'});if(c.analytics){gtag('config','${id}',{page_location:location.href,page_title:document.title,send_page_view:true});}}}catch(e){}})();`;
}
