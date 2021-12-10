import React, { Component } from 'react';
import {
  Text,
  Image,
  Alert,
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import NavigationRoots from '../../../../Constants/NavigationRoots';
import HeaderView from '../../../../Component/Header'
import colors from '../../../../CommonClasses/AppColor';
import commonStyles from '../../../../StyleSheet/UserStyleSheet';
import calendarIcon from '../../../../assets/calendar.png';
import locationPin from '../../../../assets/locationPin.png';
import appConstant from '../../../../Constants/AppConstants';
import APPURL from '../../../../Constants/URLConstants';
import networkService from '../../../../NetworkManager/NetworkManager';
import eventStyles from '../../../../StyleSheet/EventStyleSheet';
import sample from '../../../../assets/dummy.png';
import FastImage from 'react-native-fast-image'
import Spinner from 'react-native-loading-spinner-overlay';
import {getTimeFormat,changeDateFormat,dateConversionFromTimeStamp} from '../../../../HelperClasses/SingleTon'

export default class Shipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOrderArray: [],
      orderDetailData: {},
      updateUI: false,
      isVisible:true,
      showCancelBtn: false,
    }
  }
  componentDidMount() {
    this.getStoreDetailApi();
  }
  getStoreDetailApi = async () => {
    const { accId } = this.props.route.params;
    const responseJson = await networkService.networkCall(`${APPURL.URLPaths.shippingMethod}?account_id=${accId}`, 'get',
     '', appConstant.bToken, appConstant.authKey)
    this.setState({ isVisible: false })
    if (responseJson['status'] == true) {
      let acctData = responseJson['data']
      console.log('acctData', JSON.stringify(acctData));
     
    } else {
      this.setState({ isVisible: false })
    }
  }
  /*  Buttons   */

  /*  UI   */
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <HeaderView title={'Shipment Option'} showBackBtn={true} backBtnAction={() => this.props.navigation.goBack()}/>
        <Spinner visible={this.state.isVisible} textContent={''} textStyle={commonStyles.spinnerTextStyle} />
        <View style={{ height: '100%', backgroundColor: colors.LightBlueColor, justifyContent: 'space-between' }}>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.AppTheme
  },
  commonViewStyle: {
    padding: 16,
    backgroundColor: colors.AppWhite,
    borderWidth: 1, 
    borderColor: colors.LightUltraGray,
  },
});

