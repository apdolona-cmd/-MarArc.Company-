import { useStore, getPermissions, RankPermission } from '../store/useStore';

export function usePermissions(): RankPermission & { isManager: boolean } {
  const { currentUser, isManagerLoggedIn } = useStore();
  
  if (!currentUser) {
    return {
      pages: [],
      actions: {
        canViewAllEmployees: false, canViewOtherSalaries: false, canViewOwnSalary: false,
        canAddClient: false, canEditClient: false, canDeleteClient: false,
        canSendEmail: false, canViewTaxes: false, canEditSettings: false,
        canManageEmployees: false, canPaySalaries: false, canViewActivity: false, canViewOrganization: false,
        canManageInvoices: false, canManageProjects: false, canManageAttendance: false, canManageLeaves: false,
        canManageInventory: false, canViewReports: false, canGenerateReports: false, canManageCommunications: false,
        canManageContracts: false, canManagePerformance: false,
      },
      isManager: false,
    };
  }
  
  if (isManagerLoggedIn) {
    return {
      pages: ['all'],
      actions: {
        canViewAllEmployees: true, canViewOtherSalaries: true, canViewOwnSalary: true,
        canAddClient: true, canEditClient: true, canDeleteClient: true,
        canSendEmail: true, canViewTaxes: true, canEditSettings: true,
        canManageEmployees: true, canPaySalaries: true, canViewActivity: true, canViewOrganization: true,
        canManageInvoices: true, canManageProjects: true, canManageAttendance: true, canManageLeaves: true,
        canManageInventory: true, canViewReports: true, canGenerateReports: true, canManageCommunications: true,
        canManageContracts: true, canManagePerformance: true,
      },
      isManager: true,
    };
  }
  
  return { ...getPermissions(currentUser.rank), isManager: false };
}
