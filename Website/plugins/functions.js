const Axios = require('axios')
// const Helper = require('@helper')

module.exports = {
  addCommas: function(nStr) {
      nStr += "";
      var x = nStr.split(".");
      var x1 = x[0];
      var x2 = x.length > 1 ? "." + x[1] : "";
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
      }
      return x1 + x2;
  },
  /**
    * Handle Back
    * @desc Extends default router back functionality
    * @param {string} province
    * @param {number} totalCost 
  **/
  calculateTotalTax: async (province, totalCost) => {
    let taxObj = [
      { 
        province: 'Ontario',
        types: [{name: 'HST', value: 0.13}],
        HST: 0.13,
        total: 0.13
      },
      { 
        province: 'Alberta',
        types: [{name: 'GST', value: 0.05}],
        GST: 0.05,
        total: 0.05
      },
      { 
        province: 'British Columbia',
        types: [{name: 'GST', value: 0.05},{name: 'PST', value: 0.07}],
        PST: 0.07,
        GST: 0.05,
        total: 0.12
      },
      {
        province: 'Manitoba',
        types: [{name: 'GST', value: 0.05},{name: 'PST', value: 0.07}],
        PST: 0.07,
        GST: 0.05,
        total: 0.12
      },
      {
        province: 'New Brunswick',
        types: [{name: 'HST', value: 0.15}],
        HST: 0.15,
        total: 0.15
      },
      {
        province: 'Newfoundland and Labrador',
        types: [{name: 'GST', value: 0.15}],
        HST: 0.15,
        total: 0.15
      },
      {
        province: 'Northwest Territories',
        types: [{name: 'GST', value: 0.05}],
        GST: 0.05,
        total: 0.05
      },
      {
        province: 'Nova Scotia',
        types: [{name: 'HST', value: 0.15}],
        HST: 0.15,
        total: 0.15
      },
      {
        province: 'Nunavut',
        types: [{name: 'GST', value: 0.05}],
        GST: 0.05,
        total: 0.05
      },
      {
        province: 'Prince Edward Island',
        types: [{name: 'HST', value: 0.15}],
        HST: 0.15,
        total: 0.15
      },
      {
        province: 'Quebec',
        types: [{name: 'GST', value: 0.05},{name: '*QST', value: 0.0975}],
        GST: 0.05,
        QST: 0.0975,
        total: 0.15
      },
      {
        province: 'Saskatchewan',
        types: [{name: 'GST', value: 0.05},{name: 'PST', value: 0.06}],
        GST: 0.05,
        PST: 0.06,
        total: 0.15
      },
      {
        province: 'Yukon',
        types: [{ name: 'GST', value: 0.05}],
        GST: 0.05,
        total: 0.05
      },
    ]
    if(!province) return 0
    const provinceTax = taxObj.filter((i) => i.province == province)
    const tax = Math.round(totalCost * provinceTax[0].total)
    return { total: Math.round(totalCost + tax), tax_total: tax, tax: provinceTax[0].total, tax_types: provinceTax[0].types}
  },
  /**
    * Handle Back
    * @desc Extends default router back functionality
    * @param {string} fallback - The fallback path if there is no history to use with $router.back(). This is usually the case if the page was visited directly or from another site
    **/
  handleBack (fallback) {
    if (!window.history.name) {
        this.$router.push(fallback);
    } else {
        this.$router.back();
    }
  },

  /**
   * 
   * @param {string} time 
   * @return {string}
   */

  convertDate(time) {
    var date = new Date(time).toString();
    return date.substring(0, 15)
  },

  async abbreviation(province) {
    if(province == 'Alberta') var abbreviation = 'AB'
    if(province == 'British Columbia') var abbreviation = 'BC'
    if(province == 'Manitoba') var abbreviation = 'MB'
    if(province == 'New Brunswick') var abbreviation = 'NB'
    if(province == 'Newfoundland and Labrador') var abbreviation = 'NL'
    if(province == 'Nova Scotia') var abbreviation = 'NS'
    if(province == 'Ontario') var abbreviation = 'ON'
    if(province == 'Prince Edward Island') var abbreviation = 'PEI'
    if(province == 'Quebec') var abbreviation = 'QC'
    if(province == 'Saskatchewan') var abbreviation = 'SASK'
    
    return abbreviation
  },
  

}