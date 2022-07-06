/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    FIREBASE_CONFIG: {
      apiKey: "AIzaSyDZASyOTqIMePu_R38DBPHTxtDcLgkX4vY",
      authDomain: "netninja-firebase9-b9803.firebaseapp.com",
      projectId: "netninja-firebase9-b9803",
      storageBucket: "netninja-firebase9-b9803.appspot.com",
      messagingSenderId: "755887136750",
      appId: "1:755887136750:web:c239560dc652e0791fb8ff",
    },
    FIREBASE_COMMENTS: {
      apiKey: "AIzaSyAlyslKkDfpddLhq54p2LSLu0cCgMH5u5s",
      authDomain: "interactive-comments-ebba2.firebaseapp.com",
      projectId: "interactive-comments-ebba2",
      storageBucket: "interactive-comments-ebba2.appspot.com",
      messagingSenderId: "145267524904",
      appId: "1:145267524904:web:2ac1f9e622db609e187c1d",
    },
  },
};

module.exports = nextConfig;
