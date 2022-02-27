/*=========================================================================================
  File Name: salesFinances.js
  Description:  Sales Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './salesFinancesState.js'
import mutations from './salesFinancesMutations.js'
import actions from './salesFinancesActions.js'
import getters from './salesFinancesGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

