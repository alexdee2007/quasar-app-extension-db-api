export default $axios => ({

    search: async (category, text, lang) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/search/${category}.json?text=${text || ''}&limit=5&country=ua`);
      return data;
    },

    strictSearch: async (category, text, lang) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/search/${category}.json?wt=${text || ''}&limit=1&country=ua`);
      return data;
    },

    searchAll: async (text, lang) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/search/adm_level1,adm_level2,adm_settlement,adr_street,adr_address.json?text=${text || ''}&limit=1&country=ua`);
      return data;
    },

    strictSearchAll: async (text, lang) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/search/adm_level1,adm_level2,adm_settlement,adr_street,adr_address.json?wt=${text || ''}&limit=1&country=ua`);
      return data;
    },

    feature: async (featureId, lang, geometry) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/feature/${featureId}.json?geometry=${geometry || 'no'}`);
      return data;
    },

    geocode: async (text, lang) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/geocode.json?text=${text || ''}&limit=1&country=ua`);
      return data;
    },

    reverseGeocode: async (latlng, lang) => {
      const {data} = await $axios.get(`/${lang || 'uk'}/search/adr_address,adr_street,adm_settlement,adm_level2,adm_level1.json?intersect=${latlng.lng},${latlng.lat}&limit=1&country=ua`);
      return data;
    }

  });
