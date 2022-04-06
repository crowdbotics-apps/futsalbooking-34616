import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_191_393}>
        <View style={styles.View_171_868}>
          <View style={styles.View_I171_868_66_4601} />
          <View style={styles.View_I171_868_66_4602} />
          <View style={styles.View_I171_868_66_4604}>
            <TouchableOpacity
              style={styles.TouchableOpacity_I171_868_66_4605}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("15_6"))
              }
            >
              <View style={styles.View_I171_868_66_4606}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/063f/4d60/0b40028d1dbdb005c56ae9c7cc088efe"
                  }}
                  style={styles.ImageBackground_I171_868_66_4607}
                />
              </View>
              <View style={styles.View_I171_868_66_4609}>
                <Text style={styles.Text_I171_868_66_4609}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I171_868_66_4610}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("176_1307"))
              }
            >
              <View style={styles.View_I171_868_66_4611}>
                <View style={styles.View_I171_868_66_4612} />
              </View>
              <View style={styles.View_I171_868_66_4614}>
                <Text style={styles.Text_I171_868_66_4614}>Schedule</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I171_868_66_4615}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("143_408"))
              }
            >
              <View style={styles.View_I171_868_66_4616}>
                <View style={styles.View_I171_868_66_4617} />
              </View>
              <View style={styles.View_I171_868_66_4619}>
                <Text style={styles.Text_I171_868_66_4619}>Booking</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_I171_868_66_4620}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("170_50"))
              }
            >
              <View style={styles.View_I171_868_66_4621}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d4/5d92/9739c41372703747033140c01f219212"
                  }}
                  style={styles.ImageBackground_I171_868_66_4622}
                />
              </View>
              <View style={styles.View_I171_868_66_4625}>
                <Text style={styles.Text_I171_868_66_4625}>Profile</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_171_869}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78dc/f0fa/692059ae5fb069ddc227b3debab749d0"
            }}
            style={styles.ImageBackground_171_870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2902/e6ef/3a7cf651410776d07d9651cfcf35ad05"
            }}
            style={styles.ImageBackground_171_871}
          />
        </View>
      </View>
      <View style={styles.View_161_23}>
        <View style={styles.View_160_120}>
          <View style={styles.View_160_122}>
            <TouchableOpacity
              style={styles.TouchableOpacity_160_123}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("143_408"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6958/5204/c434dcfd849e6ecf2eca92dcf18630c9"
                }}
                style={styles.ImageBackground_127_19}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_160_127}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("176_1307"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63f4/1b42/34739303528fe6bbc63ed4fb65e07247"
                }}
                style={styles.ImageBackground_127_24}
              />
            </TouchableOpacity>
            <View style={styles.View_160_129}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b5d/d7e9/934c4de252f1f239242d47d52d871103"
                }}
                style={styles.ImageBackground_161_20}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_161_21}>
          <Text style={styles.Text_161_21}>Booking</Text>
        </View>
        <View style={styles.View_161_28}>
          <Text style={styles.Text_161_28}>Schedule</Text>
        </View>
      </View>
      <View style={styles.View_161_29}>
        <Text style={styles.Text_161_29}>About Us</Text>
      </View>
      <View style={styles.View_161_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab79/7d6c/01d0062515f47a33c69b27b62aea8461"
          }}
          style={styles.ImageBackground_161_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/664a/0112/7b2feb61c301d42040aa2d241ed5fa96"
          }}
          style={styles.ImageBackground_161_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fad2/9d78/f1b3ce1ef4044fc7376b818248f8a000"
          }}
          style={styles.ImageBackground_161_35}
        />
        <View style={styles.View_166_13}>
          <View style={styles.View_161_41}>
            <Text style={styles.Text_161_41}>Discover</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10bd/02cc/37665ae9a35994bda5604bae72c41de6"
            }}
            style={styles.ImageBackground_161_40}
          />
        </View>
      </View>
      <View style={styles.View_161_42}>
        <View style={styles.View_161_43}>
          <Text style={styles.Text_161_43}>Our Courts</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c6b/e502/979bd13e6813962d4cac586b59595101"
          }}
          style={styles.TouchableOpacity_161_44}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("143_183"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8c8/d589/0f2b6b6b12e36cd92d362043624a8801"
          }}
          style={styles.TouchableOpacity_161_45}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("166_15"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad40/9fef/5d06bf728e82da860f0179e8c19dca27"
          }}
          style={styles.TouchableOpacity_161_46}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("166_45"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa4e/cd0b/2ebd0f4fb454e927d1b9261b9bb12868"
          }}
          style={styles.TouchableOpacity_161_47}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("166_75"))
          }
        />
      </View>
      <View style={styles.View_15_8}>
        <View style={styles.View_15_6} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4284/7cbc/5236b51c3f836baeb0bdf0d31c450e86"
          }}
          style={styles.ImageBackground_191_304}
        />
        <View style={styles.View_15_7}>
          <Text style={styles.Text_15_7}>INDERA MAHKOTA FUTSAL CENTRE</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("162%") },
  View_191_393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_171_868: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_868_66_4601: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I171_868_66_4602: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_868_66_4604: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I171_868_66_4605: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_868_66_4606: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I171_868_66_4607: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I171_868_66_4609: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I171_868_66_4609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I171_868_66_4610: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_868_66_4611: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I171_868_66_4612: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I171_868_66_4614: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I171_868_66_4614: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I171_868_66_4615: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_868_66_4616: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I171_868_66_4617: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I171_868_66_4619: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I171_868_66_4619: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I171_868_66_4620: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I171_868_66_4621: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I171_868_66_4622: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I171_868_66_4625: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_I171_868_66_4625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_171_869: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("3%")
  },
  ImageBackground_171_870: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_171_871: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_161_23: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%")
  },
  View_160_120: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_160_122: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_160_123: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(203, 227, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_127_19: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  TouchableOpacity_160_127: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 219, 245, 1)",
    overflow: "hidden"
  },
  ImageBackground_127_24: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_160_129: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 243, 182, 1)",
    overflow: "hidden"
  },
  ImageBackground_161_20: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_161_21: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_161_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_161_28: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_161_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_161_29: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_161_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_161_30: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_161_33: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("100%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_34: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("199%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_161_35: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("299%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_166_13: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("-7%")
  },
  View_161_41: {
    width: wp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_161_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.44999999999999996,
    textTransform: "none"
  },
  ImageBackground_161_40: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_161_42: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("87%")
  },
  View_161_43: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_161_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  TouchableOpacity_161_44: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  TouchableOpacity_161_45: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("4%"),
    resizeMode: "cover"
  },
  TouchableOpacity_161_46: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  TouchableOpacity_161_47: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  View_15_8: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_15_6: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(137, 182, 206, 1)"
  },
  ImageBackground_191_304: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_15_7: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_15_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
