export const useTag = options => {
  const { tags, updateTags, maxLengthMessage } = options || {};

  const addTag = newTag => {
    const isEventHandler = typeof newTag !== 'string';
    const tagValue = isEventHandler 
    ? newTag.target.value.replace(/ /g, '')
    : newTag.replace(/ /g, '');

    if (!tagValue) {
      return;
    }
    console.log(tags);
    if (tags.value.length >= 10) {
      $q.notify(maxLengthMessage);
      return;
    }

    if (tags.value.includes(tagValue) === false) {
      updateTags([...tags.value, tagValue]);
    }

    if(isEventHandler) {
      newTag.target.value = '';
    }
  };

  const removeTag = idx => {
    const model = [...tags.value];
    model.splice(idx, 1);
    emit('update:tags', model); 
  };

  return {
    addTag,
    removeTag,
  };
};