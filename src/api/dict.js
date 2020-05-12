export default $axios => ({

    total: async (name, language = 'UK') => {
      const {data} = await $axios.get(`/dictionaries/total?name=${name}&language=${language}`);
      return data;
    },

    chunk: async (name, language = 'UK', value = '') => {
      const {data} = await $axios.get(`/dictionaries/chunk?name=${name}&language=${language}&value=${value}`);
      return data;
    },

    review: async (name, language = 'UK', hash = '') => {
      const {data} = await $axios.get(`/dictionaries/review?name=${name}&language=${language}&hash=${hash}`);
      return data;
    }

  });
