import Vue from "vue";
import VueRouter from "vue-router";
import welkin from "../utils/auth";

Vue.use(VueRouter);

// Import All Routes
import Home from "../pages/dashboard/home/home";
import Profile from "../pages/dashboard/profile/profile";
import MyProfile from "../pages/dashboard/profile/components/myProfile";
import AccountSettings from "../pages/dashboard/profile/components/accountSettings";
import ChangePassword from "../pages/dashboard/profile/components/changePassword";
import Connections from "../pages/dashboard/profile/components/connections";
import ManageStudents from "../pages/dashboard/manage/manage_students";
import StudentList from "../pages/dashboard/students/students";
import MyAdvisees from "../pages/dashboard/students/my_advisees";
import StudentRecord from "../pages/dashboard/students/std_record";
import SearchStudent from "../pages/dashboard/students/search_student";
import CourseList from "../pages/dashboard/courselist/courselist";
import CourseDetail from "../pages/dashboard/courselist/course_detail";
import Curriculum from "../pages/dashboard/curriculum/curriculum";
import OverallRemain from "../pages/dashboard/courselist/components/overall_remain";
// import ManageGrade from "../pages/dashboard/manage/manage_grade";
import ManageInstructor from "../pages/dashboard/manage/manage_instructors";
import AddStudent from "../pages/dashboard/manage/components/add_students";
import ManageWebsite from "../pages/dashboard/manage/manage_website";
import ManageUser from "../pages/dashboard/manage/manage_users";
import ManageCourses from "../pages/dashboard/manage/manage_courses";
import ManageClasses from "../pages/dashboard/manage/manage_classes";
import ManageCurriculums from "../pages/dashboard/manage/manage_curriculums";


// Auth Route
import Login from "../pages/auth/login";
import PasswordRecovery from "../pages/auth/passwordRecovery";
import PasswordReset from "../pages/auth/passwordReset";

// Define All Routes
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
      title: "Dashboard",
    },
  },
  {
    name: "search_student",
    path: "/students/search",
    component: SearchStudent,
    meta: {
      requiresAuth: true,
      title: "Search Student",
    },
  },
  {
    name: "student_list",
    path: "/students/all",
    component: StudentList,
    meta: {
      requiresAuth: true,
      title: "Student List",
      authorizedGroup: ["program director", "coordinator"],
    },
  },
  {
    name: "student_advisee",
    path: "/students/advisee",
    component: MyAdvisees,
    meta: {
      requiresAuth: true,
      title: "My Advisees",
      isAdvisor: true,
    },
  },
  {
    name: "student_record",
    path: "/student/:sid",
    component: StudentRecord,
    meta: {
      requiresAuth: true,
      title: "Student Record",
    },
  },
  {
    name: "Course_list",
    path: "/course",
    component: CourseList,
    meta: {
      requiresAuth: true,
      title: "Course List",
    },
  },
  {
    name: "course_overall",
    path: "/course/overall",
    component: OverallRemain,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator", "program director", "admin"],
      title: "Overall Student Registration",
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      requiresAuth: true,
      title: "My Profile",
    },
    children: [
      {
        name: "MyProfile",
        path: "",
        component: MyProfile,
      },
      {
        name: "AccountSettings",
        path: "settings",
        component: AccountSettings,
      },
      {
        name: "ChangePassword",
        path: "security",
        component: ChangePassword,
      },
      {
        name: "Connections",
        path: "connections",
        component: Connections,
      }
    ],
  },
  {
    name: "add_student",
    path: "/manage/student/add",
    component: AddStudent,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator"],
      title: "Add Student",
    },
  },
  {
    name: "manage_student",
    path: "/manage/student",
    component: ManageStudents,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator"],
      title: "Student Management",
    },
  },
  // {
  //   name: "manage_grade",
  //   path: "/manage/student/grade/upload",
  //   component: ManageGrade,
  //   meta: {
  //     requiresAuth: true,
  //     authorizedGroup: ["coordinator"],
  //     title: "Upload Grade",
  //   },
  // },
  {
    name: "manage_course",
    path: "/manage/course",
    component: ManageCourses,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator"],
      title: "Course Management",
    },
  },
  {
    name: "manage_class",
    path: "/manage/course/:code",
    component: ManageClasses,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator"],
      title: "Course Management",
    },
  },
  {
    name: "manage_curriculums",
    path: "/manage/curriculum",
    component: ManageCurriculums,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator"],
      title: "Curriculum Management",
    },
  },
  {
    name: "manage_instructor",
    path: "/manage/instructor",
    component: ManageInstructor,
    meta: {
      requiresAuth: true,
      authorizedGroup: ["coordinator"],
      title: "Instructor Management",
    },
  },
  {
    name: "add_user",
    path: "/manage/user",
    component: ManageUser,
    meta: {
      requiresAuth: true,
      title: "User Management",
      authorizedGroup: ["coordinator"],
    },
  },
  {
    name: "manage_website",
    path: "/manage/website",
    component: ManageWebsite,
    meta: {
      requiresAuth: true,
      title: "Website Management",
      authorizedGroup: ["coordinator"],
    },
  },
  {
    name: "course_detail",
    path: "/course/:code",
    component: CourseDetail,
    meta: {
      requiresAuth: true,
      title: "Course Detail",
    },
  },
  {
    name: "Curriculum",
    path: "/curriculum",
    component: Curriculum,
    meta: {
      requiresAuth: true,
      title: "Curriculum",
    },
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      requiresAuth: false,
      title: "Login",
    },
  },
  {
    name: "reset_password",
    path: "/accounts/reset/password",
    component: PasswordReset,
    meta: {
      requiresAuth: false,
      title: "Request Password Recovery",
    },
  },
  {
    name: "recovery_password",
    path: "/accounts/recovery",
    component: PasswordRecovery,
    meta: {
      requiresAuth: false,
      title: "Password Recovery",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  const currentUser = (await welkin.auth()).currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAdvisor = to.matched.some((record) => record.meta.isAdvisor);
  const authorizedGroup = to.meta.authorizedGroup;

  Vue.prototype.$config = (await welkin.config()).current;

  if (currentUser) {
    Vue.prototype.$currentUser = currentUser;
    Vue.prototype.$currentUser.initials =
      currentUser.given_name.charAt(0) + currentUser.family_name.charAt(0);
    Vue.prototype.$currentUser.isAuth = true;
  } else {
    Vue.prototype.$currentUser.isAuth = false;
  }

  // ADMIN CAN ACCESS EVERY PAGE
  try {
    if (requiresAuth && currentUser.group === "admin") return next();
  } catch (err) {}

  if (requiresAuth && !currentUser) {
    let path = { path: '/login' }
    if(to.fullPath !== '/') path.query = { redirect: to.fullPath }
    return next(path);
  }

  if (!requiresAuth && currentUser) return next("/");

  if (requiresAuth && isAdvisor) {
    if (!currentUser.isAdvisor) return next("/");
  }

  if (requiresAuth && authorizedGroup) {
    if (!authorizedGroup.includes(currentUser.group)) return next("/");
  }

  next();
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : "Welkin";
  });
});

export default router;
