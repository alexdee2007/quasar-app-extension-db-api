export default $axios => ({

    getMaxRows: async () => {
      const {data} = await $axios.get('/maxRows');
      return data.maxRows;
    },

    getUser: async () => {
      const {data} = await $axios.get('/user');
      return data;
    },

    getModelsRelations: async () => {
      const {data} = await $axios.get('/modelsRelations');
      return data;
    },

    getSqlWhere: async (model, where) => {
      const {data} = await $axios.post('/getSqlWhere', {model, where});
      return data.sql;
    },

    getClientIp: async () => {
      const {data} = await $axios.get('/getClientIp');
      return data.clientIp;
    },

    updateConf: async (conf) => {
      const {data} = await $axios.patch('/updateConf', {conf});
      return data;
    },

    getTimestamp: async () => {
      const {data} = await $axios.get('/timestamp');
      return data.timestamp;
    }

  });
