const baseApiUrl = 'https://birlingo.de:8081/api/webservice';
// const baseApiUrl = 'https://admin.birlingo.de:17276/api/webservice';
// const baseApiUrl = 'http://172.16.11.252:8081/api/webservice';
// https://birlingo.devtechnosys.tech:17274/api/webservice/
//  const baseApiUrl = 'https://birlingo.devtechnosys.tech:17275/api/webservice/';

apiVersion = 'api';
const apiUrls = {
  getLanguages: `${baseApiUrl}/languages`,
  getNativeLanguages: `${baseApiUrl}/getLanguageList`,
  getLanguagesString: `${baseApiUrl}/terms`,
  getLanguagesTerms: `${baseApiUrl}/afterloginterms`,
  getLastInsertedTermDate: `${baseApiUrl}/getLastInsertedTermDate`,
  app_guide: `${baseApiUrl}/app-guide`,
  learningLanguages: `${baseApiUrl}/learningLanguages`,
  afterLoginlearningLanguages: `${baseApiUrl}/afterLoginlearningLanguages`,
  registration: `${baseApiUrl}/registration`,
  verifyOtp: `${baseApiUrl}/verifyOtp`,
  login: `${baseApiUrl}/login`,
  loginwithfacebook: `${baseApiUrl}/loginwithfacebook`,
  logout: `${baseApiUrl}/logout`,
  forgotpassword: `${baseApiUrl}/forgotpassword`,
  resetpassword: `${baseApiUrl}/resetpassword`,
  loginwithgoogle: `${baseApiUrl}/loginwithgoogle`,
  resendotp: `${baseApiUrl}/resendotp`,
  getManageAccount: `${baseApiUrl}/getManageAccount`,
  updateManageAccount: `${baseApiUrl}/updateManageAccount`,
  changepassword: `${baseApiUrl}/changepassword`,
  updatelearninglang: `${baseApiUrl}/updatelearninglang`,
  privacy_policy: `${baseApiUrl}/getCmsPageData`,
  terms_conditions: `${baseApiUrl}/getCmsPageData`,
  app_demo: `${baseApiUrl}/app-demo`,
  lesson_family: `${baseApiUrl}/lesson-family-v2`,
  subscriptions: `${baseApiUrl}/subscriptions`,
  accessToken: `${baseApiUrl}/accessToken`,
  subscribed: `${baseApiUrl}/subscribed`,
  lesson_library: `${baseApiUrl}/lessonList`,
  sentencesByLessonId: `${baseApiUrl}/sentencesByLessonId`,
  saveLessonHistory: `${baseApiUrl}/saveLessonHistory`,
  getRatings: `${baseApiUrl}/getRatings`,
  rating: `${baseApiUrl}/rating`,
  getStoreUrl: `${baseApiUrl}/getSettingData`,
  getStoreUrl1: `${baseApiUrl}/getSettingData?app_version=${global.version}&platform=` + Platform.OS,
  susbcontent: `${baseApiUrl}/susbcontent`,
  getSubsriptionStatus: `${baseApiUrl}/getSubsriptionStatus?phone=true`,
  cancelSubscription: `${baseApiUrl}/cancelSubs`,
  removeUserProfile: `${baseApiUrl}/deleteUser`,
  getSubscriptionContent: `${baseApiUrl}/subscription-content`,
  subscribedForApplePay: `${baseApiUrl}/subscribedForApplePay`,
  subscribedForGooglePay: `${baseApiUrl}/subscribedForGooglePay`,
  agb: `${baseApiUrl}/getCmsPageData`,
  subscribeForOneTime: `${baseApiUrl}/subscribeForOneTime`,
  getTransactionHistory: `${baseApiUrl}/getTransactionHistory?current_page=`,
  countries: `${baseApiUrl}/countries`,
  isAlreadySubscribed: `${baseApiUrl}/isAlreadySubscribed`,
  demoLessonOnly: `${baseApiUrl}/demoLessonOnly`,
  welcomeProceeded: `${baseApiUrl}/welcomeProceeded`,
  
};
///getSubsriptionStatus
const pagesId = {
  termsPage: 'terms__conditions',
  dealsPage: 'deals_terms',
};

export {apiUrls, pagesId, baseApiUrl};