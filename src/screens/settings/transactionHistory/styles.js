import { StyleSheet } from "react-native";
import { metrics, colors, fonts } from "../../../Theme";

const height = metrics.screenHeight;
const width = metrics.screenWidth;
export const styles = StyleSheet.create({
  nav_bar: {
    backgroundColor: colors.maroon,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 8,
    flexDirection: "row",
  },
  nav_view: {
    marginHorizontal: width * (20 / 375),
    flexDirection: "row",
    marginVertical: width * (20 / 375),
    alignItems: "center",
  },
  _viTitle: {
    color: colors.code_fff,
    fontSize: width * (12 / 375),
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.code_fff,
    marginHorizontal: 20,
    marginTop: 12,
    opacity: 0.7,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5
    // marginBottom: 10
  },
  free: {
    alignItems: "center",
  },
  euro:{
    fontWeight: "bold",
    paddingTop: 2
  },
  // buttonFree: {
  //   marginTop: width * (20 / 375),
  //   backgroundColor: colors.code_fff,
  //   width: width * (240 / 375),
  //   height: width * (50 / 375),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   borderRadius: 30,

  // },
  btntxt: {
    fontSize: width * (10 / 375),
    color: colors.code_82c2,
    fontWeight: "bold",
    paddingBottom: 10
  },
  row:{
    // flexDirection: "row",
    justifyContent: "space-between"
  },
  // title: {
  //   fontSize: width * (36 / 375),
  //   color: colors.code_fff,
  //   backgroundColor: 'transparent',
  //   paddingTop: width * (90 / 375),
  //   fontWeight: 'bold',
  //   fontFamily: fonts.type.ACaslonPro_Bold
  // },
  renderouterView: {
    paddingHorizontal: width * (9 / 375),
    marginBottom: width * (12 / 375),
    // alignSelf: "center",
  },
  backImg: {
    height: 375 * (180 / 375),
    width: width * (306 / 375),
  },
  midView: {
    // justifyContent: "flex-end",
    bottom: 0,
    // borderWidth: 0.5,
    // borderColor: '#fff',
    borderRadius: 10,
  },
  nestedView: {
    //  position: 'absolute',
    width: width * (306 / 375),
    backgroundColor: "#fff",
    //  flex: 0.55,
    paddingHorizontal: width * (5 / 375),
    borderBottomLeftRadius: width * (10 / 375),
    borderBottomRightRadius: width * (10 / 375),
  },
  levelOuterView: {
    flexDirection: "row",
    marginTop: width * (12 / 375),
    // justifyContent: "space-between"
  },
  levelNameView: {
    justifyContent: "center",
    width: width * (142 / 375),
  },
  levelName: {
    color: colors.code_blk,
    fontSize: width * (15 / 375),
    fontFamily: fonts.type.Akkurat,
  },
  progressView: {
    justifyContent: "center",
    marginRight: width * (15 / 375),
    // marginLeft: width * (5 / 375),
  },
  circleOuterView: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  circleNavView: {
    backgroundColor: "rgb(61,118,206)",
    height: width * (25 / 375),
    width: width * (25 / 375),
    borderRadius: width * (15 / 375),
    justifyContent: "center",
    alignItems: "center",
  },
  levelNumberBold: {
    color: colors.code_blk,
    fontSize: width * (14 / 375),
    // fontFamily: fonts.type.Akkurat,
    fontWeight: "bold"
  },
  levelNumberCoupon: {
    color: colors.code_fff,
    fontSize: width * (11 / 375),
    // fontFamily: fonts.type.Roboto_Medium,
    fontWeight: "900",
    backgroundColor: colors.code_black,
    paddingVertical: 5,
    paddingHorizontal: 8,
    overflow: "hidden",
    borderRadius: 4
  },
  levelNumberStatus:{
    color: colors.code_fff,
    fontSize: width * (11 / 375),
    // fontFamily: fonts.type.Akkurat,
    fontWeight: "900",
    paddingVertical: 5,
    paddingHorizontal: 8,
    overflow: "hidden",
    borderRadius: 4
  },
  levelNumber: {
    color: colors.code_blk,
    fontSize: width * (14 / 375),
    fontFamily: fonts.type.Akkurat,
    // fontWeight: "bold"
  },
  levelNumberId: {
    color: colors.code_blk,
    fontSize: width * (9 / 375),
    fontFamily: fonts.type.Akkurat,
    paddingBottom:5
    // fontWeight: "bold"
  },
  loginText: {
    marginTop: width * (30 / 375),
    marginBottom: width * (50 / 375),
  },
  login: {
    fontSize: width * (25 / 375),
    color: colors.code_fff,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
    paddingTop: width * (80 / 375),
    paddingBottom: width * (20 / 667),
    fontSize: height * (13 / 667),
    fontWeight: "bold",
    fontFamily: fonts.type.Akkurat_Bold,
  },
  description: {
    fontSize: height * (12 / 667),
    lineHeight: height * (8 / 375),
    color: colors.code_fff,
    backgroundColor: "transparent",
    textAlign: "left",
    paddingBottom: width * (80 / 375),
    paddingRight: width * (60 / 375),
    marginTop: width * (20 / 375),
    letterSpacing: 1,
    fontFamily: fonts.type.Akkurat,
  },
  slides: {
    backgroundColor: colors.code_82c2,
    paddingBottom: width * (80 / 375),
    paddingHorizontal: width * (20 / 375),
  },
  container: {
    // backgroundColor: colors.code_fff,
    paddingHorizontal: width * (20 / 375),
    flex: 1,
  },

  outerContainer: {
    flex: 1,
    backgroundColor: colors.code_fff,
  },
  loginContainer: {
    paddingHorizontal: 16,
    marginTop: "18%",
  },
  textFieldContainer: {
    marginTop: width * (20 / 375),
  },

  rememberMeContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "6%",
    borderWidth: 1,
  },
  rememberMe: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * (10 / 375),
    paddingHorizontal: width * (10 / 375),
  },
  btnStyle: {
    alignItems: "center",
    marginTop: "10%",
  },
  googleButtonStyle: {
    width: width * (240 / 375),
    flexDirection: "row",
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.code_fff,
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: width * (20 / 375),
  },
  facebookButtonStyle: {
    width: width * (240 / 375),
    flexDirection: "row",
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.code_fff,
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: width * (20 / 375),
    marginBottom: width * (50 / 375),
  },
  facebookTextStyle: { color: colors.white, marginLeft: 10 },
  orLoginTextStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "5%",
  },
  footerContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 16,
  },
  socialNote: {
    alignItems: "center",
    marginTop: width * (50 / 375),
  },
  socialText: {
    marginLeft: width * (8 / 375),
    marginRight: width * (4 / 375),
    fontFamily: fonts.type.Akkurat_Bold,
  },
  signUpText: {
    color: colors.code_fff,
    textDecorationLine: "underline",
    fontWeight: "bold",
    fontFamily: fonts.type.A,
  },
  login_note: {
    color: colors.code_fff,
    fontFamily: fonts.type.Akkurat,
  },
  login_note_view: {
    flexDirection: "row",
    marginTop: 10,
  },
  loginTitle: {
    fontFamily: fonts.type.ACaslonPro_Bold,
  },
  forgot_note: {
    color: colors.code_fff,
    fontFamily: fonts.type.Akkurat_Bold,
    textDecorationLine: "underline",
  },
  googleImg: {
    height: width * (25 / 375),
    width: width * (25 / 375),
  },
  facebookImg: {
    height: width * (30 / 375),
    width: width * (30 / 375),
  },
  socialLabel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  backArrowImg: {
    width: width * (14 / 375),
    tintColor: colors.code_fff,
  },
  resend_txt: {
    color: colors.code_fff,
    fontFamily: fonts.type.Akkurat_Bold,
    textDecorationLine: "underline",
  },

  // backArrowImg: {
  //   width: width * (14 / 375)
  // },
  // nav_view: {
  //   marginLeft: width * (20 / 375),
  //   width: width * (80 / 375),
  //   flexDirection: 'row',
  //   marginTop: width * (50 / 375),
  //   alignItems: 'center',
  // },
  navTitle: {
    color: colors.code_fff,
    fontSize: width * (12 / 375),
    fontFamily: fonts.type.Akkurat_Bold,
  },
  titleView: {
    marginTop: width * (30 / 375),
    marginHorizontal: width * (20 / 375),
  },
  title: {
    color: colors.code_fff,
    fontSize: width * (32 / 375),
    fontFamily: fonts.type.ACaslonPro_Bold,
  },
  buttonFree: {
    marginTop: width * (20 / 375),
    backgroundColor: colors.maroon,
    width: width * (240 / 375),
    height: width * (50 / 375),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  // btntxt: {
  //   fontSize: width * (20 / 375),
  //   color: colors.code_fff,
  //   fontWeight: "bold",
  // },
});