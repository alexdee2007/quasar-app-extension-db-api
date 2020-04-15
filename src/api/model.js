import { pluralize } from 'inflection';

export default $axios => ({

    deleteById: async (model, id) => {
      const {data} = await $axios.delete(`/${pluralize(model)}/${id}`);
      return data;
    },

    deleteByIds: async (model, ids) => {
      const {data} = await $axios.delete(`/${pluralize(model)}`, {data: {ids}});
      return data;
    },

    find: async (model, filter = {}) => {
      filter = encodeURI(JSON.stringify(filter));
      const {data} = await $axios.get(`/${pluralize(model)}?filter=${filter}`);
      return data;
    },

    findOne: async (model, filter = {}) => {
      filter = encodeURI(JSON.stringify(filter));
      const {data} = await $axios.get(`/${pluralize(model)}/findOne?filter=${filter}`);
      return data;
    },

    findById: async (model, id) => {
      const {data} = await $axios.get(`/${pluralize(model)}/${id}`);
      return data;
    },

    exists: async (model, id) => {
      const {data} = await $axios.head(`/${pluralize(model)}/${id}`);
      return data;
    },

    count: async (model, where = {}) => {
      where = encodeURI(JSON.stringify(where));
      const {data} = await $axios.get(`/${pluralize(model)}/count?where=${where}`);
      return data.count;
    },

    remoteGet: async (model, methodName, params) => {
      const {data} = await $axios.get(`${pluralize(model)}/${methodName}`, {params});
      return data;
    },

    remotePost: async (model, methodName, params) => {
      const {data} = await $axios.post(`${pluralize(model)}/${methodName}`, params);
      return data;
    },

    save: async (model, modelData) => {
      const {data} = await $axios.post(`${pluralize(model)}/save`, modelData);
      return data;
    }

  });
