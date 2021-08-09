import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice';
import headerReducer from "../redux/Header/headerReducer";
import profileReducer from "../redux/Profile/profileReducer";
import {footerReducer} from '../redux/Footer/footerReducer';
import { newsReducer } from '../redux/News/newsReducer';
import {userReducer} from '../redux/UserData/usersReducer';
import { activityReducer } from '../redux/Activities/activitiesReducer';
import { testimonialsReducer } from '../redux/Testimonials/testimonialsReducer';
import { titleReducer } from '../redux/TitleReducer/TitleReducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
    footer: footerReducer,
    news: newsReducer,
    profile: profileReducer,
    user: userReducer,
    testimonials: testimonialsReducer,
    activities: activityReducer,
    organizations: titleReducer,
  },
})
