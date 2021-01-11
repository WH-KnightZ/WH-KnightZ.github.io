export const adminRouteBase = '/admin';

const config = {
    api: {
        baseURL: 'https://586sle2nic.execute-api.us-east-1.amazonaws.com/developer',
    },
    app: {
        secretKey: 'hb2021',
        expiresIn: '30d',
    },
    rest: {
        signInAdmin: () => '/api/v1/admin/auth/signin',
        signInUser: () => '/api/v1/user/auth/signin',
        signInNurse: () => '/api/v1/nurse/auth/signin',
        signUpUser: () => '/api/v1/user/auth/signup',
        signUpNurse: () => '/api/v1/nurse/auth/signup',
        signOutUser: () => '/api/v1/user/auth/signout',
        signOutNurse: () => '/api/v1/nurse/auth/signout',
        signOutAdmin: () => '/api/v1/admin/auth/signout',
        refreshTokenAdmin: () => '/api/v1/admin/auth/refresh-token?authen',
        refreshTokenNurse: () => '/api/v1/nurse/auth/refresh-token',
        refreshTokenUser: () => '/api/v1/user/auth/refresh-token',
        createMeeting: () => '/api/v1/meetings',
        joinMeeting: () => '/api/v1/meetings/join',
        leaveMetting: () => '/api/v1/meetings/leave',
        endMetting: () => '/api/v1/meetings',
        getAllAttendee: () => '/api/v1/meetings',
        getProfile: () => '/api/v1/user/get-profile',
        forceChangePassword: () => '/api/v1/admin/auth/force-change-pass',
        getAllUsers: () => '/api/v1/admin/users',
        updateUser: (id) => `/api/v1/admin/users/${id}`,
        createUser: () => '/api/v1/admin/users',
        searchUsers: () => '/api/v1/admin/users/search',
        forgotPassword: () => '/api/v1/recovery/forgot-password',
    },
    routes: {
        managerUsers: () => adminRouteBase + '/users',
    },
};

export default config;