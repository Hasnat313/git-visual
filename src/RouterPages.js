import { Suspense, useEffect } from "react";
import { Helmet } from 'react-helmet';

// import { useAuthentication } from "./Hooks/useAuthentication";

import DefaultLayout from "./Layouts/DefaultLayout";
import NoFooterLayout from "./Layouts/NoFooterLayout";
import AuthLayout from "./Layouts/AuthLayout";

import Profile from "./pages/Profile/Profile";
// import LandingPage from "./pages/LandingPage/LandingPage";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount";
import DevelopersPage from "./pages/DevelopersPage/DevelopersPage";
import DiscoverGigs from "./pages/Gigs/DiscoverGigs";
import GigDetail from "./pages/Gigs/GigDetail";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import Login from "./pages/Auth/Login/Login";
import ChatPage from "./pages/MessagesPage/ChatPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import NotFound from "./pages/NotFound/NotFound";
import PricingPage from "./pages/PricingPage/PricingPage";
import AddSkills from "./pages/Profile/AddSkills/AddSkills";
import CreateProfile from "./pages/Profile/CreateProfile/CreateProfile";
import EditProfile from "./pages/Profile/EditProfile/EditProfile";
import JobDescription from "./pages/Profile/JobDescription/JobDescription";
import JobPost from "./pages/Profile/JobPost/JobPost";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import UserPosts from "./pages/UserPosts/UserPosts";

import { Route, Routes } from "react-router-dom";

function RouterPages() {

  useEffect(() => { }, []);

  return (
    <>
      <Helmet>
        <title>GitVisual</title>
        <meta name="description" content="GitVisual" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>

      <>
        <Suspense fallback={<div className="app-loader">Loading...</div>}>

          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/" element={
              <DefaultLayout>
                <DevelopersPage />
              </DefaultLayout>
            } />
            <Route path="/home" element={
              <DefaultLayout>
                <DevelopersPage />
              </DefaultLayout>
            } />
            <Route path="/profile" element={
              <DefaultLayout>
                <Profile />
              </DefaultLayout>
            } />
            <Route path="/newprofile" element={
              <DefaultLayout>
                <CreateProfile />
              </DefaultLayout>
            } />
            <Route path="/editprofile" element={
              <DefaultLayout>
                <EditProfile />
              </DefaultLayout>
            } />
            <Route path="/jobpost" element={
              <DefaultLayout>
                <JobPost />
              </DefaultLayout>
            } />
            <Route path="/skills" element={
              <DefaultLayout>
                <SkillsPage />
              </DefaultLayout>
            } />
            <Route path="/discover" element={
              <DefaultLayout>
                <DiscoverPage />
              </DefaultLayout>
            } />
            <Route path="/success" element={
              <DefaultLayout>
                <SuccessPage />
              </DefaultLayout>
            } />
            <Route path="/pricing" element={
              <DefaultLayout>
                <PricingPage />
              </DefaultLayout>
            } />
            <Route path="/posts" element={
              <DefaultLayout>
                <UserPosts />
              </DefaultLayout>
            } />
            <Route path="/posts/detail/:id" element={
              <DefaultLayout>
                <JobDescription />
              </DefaultLayout>
            } />
            <Route path="/sellers" element={
              <DefaultLayout>
                <DiscoverGigs />
              </DefaultLayout>
            } />
            <Route path="/sellers/detail/:id" element={
              <DefaultLayout>
                <GigDetail />
              </DefaultLayout>
            } />
            <Route path="/editskills" element={
              <DefaultLayout>
                <AddSkills />
              </DefaultLayout>
            } />
            <Route path="/messages" element={
              <DefaultLayout>
                <MessagesPage />
              </DefaultLayout>
            } />
            <Route path="/chat" element={
              <NoFooterLayout>
                <ChatPage />
              </NoFooterLayout>
            } />

            <Route path="/auth/login" element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            } />
            <Route path="/auth/signup" element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            } />
            <Route path="/auth/resetpassword" element={
              <AuthLayout>
                <ResetPassword />
              </AuthLayout>
            } />
            <Route path="/auth/forgotpassword" element={
              <AuthLayout>
                <ForgotPassword />
              </AuthLayout>
            } />
            <Route path="/deleteaccount" element={
              <DefaultLayout>
                <DeleteAccount />
              </DefaultLayout>
            } />
            <Route path="*" element={
              <DefaultLayout>
                <NotFound />
              </DefaultLayout>
            } />
            <Route path="404" element={
              <DefaultLayout>
                <NotFound />
              </DefaultLayout>
            } />
          </Routes>
        </Suspense>
      </>
    </>
  );
}

export default RouterPages;
