const Gender = {
    MALE: 'male',
    FEMALE: 'female',
    OTHERS: 'others'
}

const Roles = {
    ADMIN: 'Admin',
    COMPANY_ADMIN: 'CompanyAdmin',
    COMPANY_USER: 'CompanyUser',
    AGENT: 'Agent',
    CONTRIBUTOR: 'Contributor',
    MODERATOR: 'Moderator',
    DEFAULT_USER: 'DefaultUser'
}

const VerificationStatus = {
    REGISTERED: 'registered',
    EMAIL_CONFIRMED: 'emailconfirmed',
    ADMIN_APPROVED: 'adminapproved',
    BLOCKED: 'blocked'
}

module.exports = {
    Gender,
    Roles,
    VerificationStatus
}