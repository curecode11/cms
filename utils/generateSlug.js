const slugify=require('slugify').default
const generateSlug = (data, field = 'title') => {
    if (data[field]) {
      return slugify(data[field], { lower: true, strict: true });
    }
    return '';
  };
  
  module.exports = generateSlug;