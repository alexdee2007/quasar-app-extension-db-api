export default $axios => ({

    total: async (name) => {
      const {data} = await $axios.get(`/dictionaries/total?name=${name}`);
      return data;
    },

    chunk: async (name, value) => {
      const {data} = await $axios.get(`/dictionaries/chunk?name=${name}&value=${value}`);
      return data;
    },

    dicts: async (dicts) => {
      const {data} = await $axios.post(`/dictionaries/dicts`, {dicts});
      return data;
    }

  });
