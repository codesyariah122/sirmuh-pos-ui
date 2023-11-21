export { default as Loading } from '../..\\components\\Loading.vue'
export { default as BanksBankDataCell } from '../..\\components\\Banks\\BankDataCell.vue'
export { default as BanksFilterBank } from '../..\\components\\Banks\\FilterBank.vue'
export { default as BanksTrashCell } from '../..\\components\\Banks\\TrashCell.vue'
export { default as CampaignsCampaignDataCell } from '../..\\components\\Campaigns\\CampaignDataCell.vue'
export { default as CampaignsCampaignDetail } from '../..\\components\\Campaigns\\CampaignDetail.vue'
export { default as CampaignsCampaignFilter } from '../..\\components\\Campaigns\\CampaignFilter.vue'
export { default as CampaignsCampaignTrashCell } from '../..\\components\\Campaigns\\CampaignTrashCell.vue'
export { default as CampaignsCategoryCampaignCell } from '../..\\components\\Campaigns\\CategoryCampaignCell.vue'
export { default as CardsCardBarChart } from '../..\\components\\Cards\\CardBarChart.vue'
export { default as CardsCardDetailData } from '../..\\components\\Cards\\CardDetailData.vue'
export { default as CardsCardLineChart } from '../..\\components\\Cards\\CardLineChart.vue'
export { default as CardsCardPageVisits } from '../..\\components\\Cards\\CardPageVisits.vue'
export { default as CardsCardProfile } from '../..\\components\\Cards\\CardProfile.vue'
export { default as CardsCardSettings } from '../..\\components\\Cards\\CardSettings.vue'
export { default as CardsCardSocialTraffic } from '../..\\components\\Cards\\CardSocialTraffic.vue'
export { default as CardsCardStats } from '../..\\components\\Cards\\CardStats.vue'
export { default as CardsCardTable } from '../..\\components\\Cards\\CardTable.vue'
export { default as DonationsDonationDataCell } from '../..\\components\\Donations\\DonationDataCell.vue'
export { default as DonationsDonationFilter } from '../..\\components\\Donations\\DonationFilter.vue'
export { default as DonationsDonationTrashCell } from '../..\\components\\Donations\\DonationTrashCell.vue'
export { default as DropdownsIndexDropdown } from '../..\\components\\Dropdowns\\IndexDropdown.vue'
export { default as DropdownsNotificationDropdown } from '../..\\components\\Dropdowns\\NotificationDropdown.vue'
export { default as DropdownsPagesDropdown } from '../..\\components\\Dropdowns\\PagesDropdown.vue'
export { default as DropdownsTableDropdown } from '../..\\components\\Dropdowns\\TableDropdown.vue'
export { default as DropdownsTableOptions } from '../..\\components\\Dropdowns\\TableOptions.vue'
export { default as DropdownsUserDropdown } from '../..\\components\\Dropdowns\\UserDropdown.vue'
export { default as FootersFooterAdmin } from '../..\\components\\Footers\\FooterAdmin.vue'
export { default as FootersFooterSmall } from '../..\\components\\Footers\\FooterSmall.vue'
export { default as HeadersHeaderStats } from '../..\\components\\Headers\\HeaderStats.vue'
export { default as LandingAuthNavbar } from '../..\\components\\Landing\\AuthNavbar.vue'
export { default as LandingFooter } from '../..\\components\\Landing\\Footer.vue'
export { default as MapsMapExample } from '../..\\components\\Maps\\MapExample.vue'
export { default as MoleculesPagination } from '../..\\components\\Molecules\\Pagination.vue'
export { default as MoleculesRowLoading } from '../..\\components\\Molecules\\RowLoading.vue'
export { default as MoleculesStepper } from '../..\\components\\Molecules\\Stepper.vue'
export { default as MoleculesSuccessAlert } from '../..\\components\\Molecules\\SuccessAlert.vue'
export { default as MoleculesTableHeader } from '../..\\components\\Molecules\\TableHeader.vue'
export { default as MoleculesTextEditor } from '../..\\components\\Molecules\\TextEditor.vue'
export { default as NavbarsAdminNavbar } from '../..\\components\\Navbars\\AdminNavbar.vue'
export { default as NavbarsAuthNavbar } from '../..\\components\\Navbars\\AuthNavbar.vue'
export { default as NavbarsIndexNavbar } from '../..\\components\\Navbars\\IndexNavbar.vue'
export { default as Sidebar } from '../..\\components\\Sidebar\\Sidebar.vue'
export { default as UsersRoleDataCell } from '../..\\components\\Users\\RoleDataCell.vue'
export { default as UsersUserDataCell } from '../..\\components\\Users\\UserDataCell.vue'
export { default as UsersUserDetail } from '../..\\components\\Users\\UserDetail.vue'
export { default as UsersUserFilter } from '../..\\components\\Users\\UserFilter.vue'
export { default as UsersUserTrashCell } from '../..\\components\\Users\\UserTrashCell.vue'
export { default as CampaignsCategoryTrashCell } from '../..\\components\\Campaigns\\Category\\TrashCell.vue'
export { default as CampaignsFormAdd } from '../..\\components\\Campaigns\\Form\\Add.vue'
export { default as CampaignsFormDetail } from '../..\\components\\Campaigns\\Form\\Detail.vue'
export { default as CampaignsFormEdit } from '../..\\components\\Campaigns\\Form\\Edit.vue'
export { default as DonationsFormAdd } from '../..\\components\\Donations\\Form\\Add.vue'
export { default as DonationsFormBackupAdd } from '../..\\components\\Donations\\Form\\backup_add.vue'
export { default as MoleculesCardsCampaignData } from '../..\\components\\Molecules\\Cards\\CampaignData.vue'
export { default as MoleculesCardsUserData } from '../..\\components\\Molecules\\Cards\\UserData.vue'
export { default as SettingsChangePasswordForm } from '../..\\components\\Settings\\ChangePassword\\Form.vue'
export { default as SettingsProfileCardProfile } from '../..\\components\\Settings\\Profile\\CardProfile.vue'
export { default as SettingsProfileCardSettings } from '../..\\components\\Settings\\Profile\\CardSettings.vue'
export { default as UsersFormAdd } from '../..\\components\\Users\\Form\\Add.vue'
export { default as UsersFormDetail } from '../..\\components\\Users\\Form\\Detail.vue'
export { default as UsersFormEdit } from '../..\\components\\Users\\Form\\Edit.vue'
export { default as CampaignsCategoryFormAdd } from '../..\\components\\Campaigns\\Category\\Form\\Add.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
