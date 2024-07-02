import {Image, View} from 'react-native';
import {fp, hp, wp} from '../../utils/resDimensions';
import {dashboardAssets} from '../../assets/dashboard';

const DashboardItemGrid = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: hp(4),
        width: wp(90),
        alignSelf: 'center',
        justifyContent: 'space-between',
      }}>
      <Image
        source={dashboardAssets?.fingerprint}
        style={{height: fp(5), width: fp(5), alignSelf: 'center'}}
        resizeMode="contain"
      />
      <Image
        source={dashboardAssets?.flightTakeoff}
        style={{height: fp(3), width: fp(3), alignSelf: 'center'}}
        resizeMode="contain"
      />
      <Image
        source={dashboardAssets?.waterDrop}
        style={{height: fp(3), width: fp(3), alignSelf: 'center'}}
        resizeMode="contain"
      />
      <Image
        source={dashboardAssets?.healthSafety}
        style={{height: fp(3), width: fp(3), alignSelf: 'center'}}
        resizeMode="contain"
      />
      <Image
        source={dashboardAssets?.historyEdu}
        style={{height: fp(3), width: fp(3), alignSelf: 'center'}}
        resizeMode="contain"
      />
      <Image
        source={dashboardAssets?.cardMembership}
        style={{height: fp(3), width: fp(3), alignSelf: 'center'}}
        resizeMode="contain"
      />
    </View>
  );
};

export default DashboardItemGrid;
