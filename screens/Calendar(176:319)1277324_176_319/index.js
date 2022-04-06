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
      <View style={styles.View_146_21}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bab/5439/27e74abd292586eddd49400999f6f718"
          }}
          style={styles.ImageBackground_146_22}
        />
        <View style={styles.View_146_23}>
          <View style={styles.View_146_24}>
            <Text style={styles.Text_146_24}>1</Text>
          </View>
          <View style={styles.View_146_25}>
            <Text style={styles.Text_146_25}>2</Text>
          </View>
          <View style={styles.View_146_26}>
            <Text style={styles.Text_146_26}>3</Text>
          </View>
          <View style={styles.View_146_27}>
            <Text style={styles.Text_146_27}>4</Text>
          </View>
          <View style={styles.View_146_28}>
            <Text style={styles.Text_146_28}>5</Text>
          </View>
          <View style={styles.View_146_29}>
            <Text style={styles.Text_146_29}>6</Text>
          </View>
          <View style={styles.View_146_30}>
            <Text style={styles.Text_146_30}>7</Text>
          </View>
        </View>
        <View style={styles.View_146_31}>
          <View style={styles.View_146_32}>
            <Text style={styles.Text_146_32}>8</Text>
          </View>
          <View style={styles.View_146_33}>
            <Text style={styles.Text_146_33}>9</Text>
          </View>
          <View style={styles.View_146_34}>
            <Text style={styles.Text_146_34}>10</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1a0/2ea0/b784b348838823e9887edacc43913097"
            }}
            style={styles.ImageBackground_146_35}
          />
          <View style={styles.View_146_36}>
            <Text style={styles.Text_146_36}>11</Text>
          </View>
          <View style={styles.View_146_37}>
            <Text style={styles.Text_146_37}>12</Text>
          </View>
          <View style={styles.View_146_38}>
            <Text style={styles.Text_146_38}>13</Text>
          </View>
          <View style={styles.View_146_39}>
            <Text style={styles.Text_146_39}>14</Text>
          </View>
        </View>
        <View style={styles.View_146_40}>
          <View style={styles.View_146_41}>
            <Text style={styles.Text_146_41}>15</Text>
          </View>
          <View style={styles.View_146_42}>
            <Text style={styles.Text_146_42}>16</Text>
          </View>
          <View style={styles.View_146_43}>
            <Text style={styles.Text_146_43}>17</Text>
          </View>
          <View style={styles.View_146_44}>
            <Text style={styles.Text_146_44}>18</Text>
          </View>
          <View style={styles.View_146_45}>
            <Text style={styles.Text_146_45}>19</Text>
          </View>
          <View style={styles.View_146_46}>
            <Text style={styles.Text_146_46}>20</Text>
          </View>
          <View style={styles.View_146_47}>
            <Text style={styles.Text_146_47}>21</Text>
          </View>
        </View>
        <View style={styles.View_146_48}>
          <View style={styles.View_146_49}>
            <Text style={styles.Text_146_49}>22</Text>
          </View>
          <View style={styles.View_146_50}>
            <Text style={styles.Text_146_50}>23</Text>
          </View>
          <View style={styles.View_146_51}>
            <Text style={styles.Text_146_51}>24</Text>
          </View>
          <View style={styles.View_146_52}>
            <Text style={styles.Text_146_52}>25</Text>
          </View>
          <View style={styles.View_146_53}>
            <Text style={styles.Text_146_53}>26</Text>
          </View>
          <View style={styles.View_146_54}>
            <Text style={styles.Text_146_54}>27</Text>
          </View>
          <View style={styles.View_146_55}>
            <Text style={styles.Text_146_55}>28</Text>
          </View>
        </View>
        <View style={styles.View_146_56}>
          <View style={styles.View_146_57}>
            <Text style={styles.Text_146_57}>1</Text>
          </View>
          <View style={styles.View_146_58}>
            <Text style={styles.Text_146_58}>2</Text>
          </View>
          <View style={styles.View_146_59}>
            <Text style={styles.Text_146_59}>3</Text>
          </View>
          <View style={styles.View_146_60}>
            <Text style={styles.Text_146_60}>4</Text>
          </View>
          <View style={styles.View_146_61}>
            <Text style={styles.Text_146_61}>5</Text>
          </View>
          <View style={styles.View_146_62}>
            <Text style={styles.Text_146_62}>6</Text>
          </View>
          <View style={styles.View_146_63}>
            <Text style={styles.Text_146_63}>7</Text>
          </View>
        </View>
        <View style={styles.View_146_64}>
          <View style={styles.View_146_65}>
            <Text style={styles.Text_146_65}>11 Feb 2021</Text>
          </View>
          <View style={styles.View_146_66}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22e0/391a/fc8bcc3a89b80bab77dc3267036d7c97"
              }}
              style={styles.ImageBackground_146_67}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e470/2c12/c9369d68e70f2146daf95ebec72b4428"
              }}
              style={styles.ImageBackground_146_69}
            />
          </View>
        </View>
        <View style={styles.View_146_71}>
          <View style={styles.View_146_72}>
            <Text style={styles.Text_146_72}>s</Text>
          </View>
          <View style={styles.View_146_73}>
            <Text style={styles.Text_146_73}>m</Text>
          </View>
          <View style={styles.View_146_74}>
            <Text style={styles.Text_146_74}>t</Text>
          </View>
          <View style={styles.View_146_75}>
            <Text style={styles.Text_146_75}>w</Text>
          </View>
          <View style={styles.View_146_76}>
            <Text style={styles.Text_146_76}>t</Text>
          </View>
          <View style={styles.View_146_77}>
            <Text style={styles.Text_146_77}>f</Text>
          </View>
          <View style={styles.View_146_78}>
            <Text style={styles.Text_146_78}>s</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_176_459}>
        <Text style={styles.Text_176_459}>Choose Your Date</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_146_21: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%")
  },
  ImageBackground_146_22: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_146_23: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("26%")
  },
  View_146_24: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_24: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_25: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_25: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_26: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_26: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_27: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_27: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_28: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_28: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_29: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_29: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_30: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_30: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_31: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("33%")
  },
  View_146_32: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_32: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_33: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_33: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_34: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_34: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_146_35: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_146_36: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_37: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_37: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_38: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_38: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_39: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_146_39: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_40: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%")
  },
  View_146_41: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_41: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_42: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_42: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_43: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_43: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_44: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_44: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_45: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_45: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_46: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_46: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_47: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_47: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_48: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("54%")
  },
  View_146_49: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_49: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_50: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_50: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_51: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_51: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_52: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_52: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_53: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_53: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_54: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_54: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_55: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_55: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_56: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("63%")
  },
  View_146_57: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_57: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_58: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_58: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_59: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_59: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_60: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_60: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_61: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_61: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_62: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_62: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_63: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_63: {
    color: "rgba(73, 80, 87, 1)",
    fontSize: 14.05172348022461,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_64: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_146_65: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_146_65: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 17.92364501953125,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_66: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_146_67: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_146_69: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_146_71: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%")
  },
  View_146_72: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_72: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 11.615762710571289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_73: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_73: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 11.615762710571289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_74: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_74: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 11.615762710571289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_75: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_75: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 11.615762710571289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_76: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_76: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 11.615762710571289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_77: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_77: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_78: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_146_78: {
    color: "rgba(59, 80, 90, 1)",
    fontSize: 11.615762710571289,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_459: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_176_459: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
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
