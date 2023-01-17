import Toast from 'react-native-simple-toast';
export const  toast=(message, position)=> {
		
    if (position == 'center') {
      Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
  
    }
    else if (position == 'top') {
      Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
    }
    else if (position == 'bottom') {
      Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
  
    }
  
  }