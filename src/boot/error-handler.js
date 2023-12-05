import { boot } from 'quasar/wrappers'
import { getErrorMessage } from '@/utils/firebase/error.message';
import { Notify } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( { app } ) => {
  app.config.errorHandler = ((err, instance, info) => {
    console.log(`### app config errorHandler ###`);
    console.log('err', err);
    console.log('instance', instance);
    console.log('info', info);
    Notify.create(getErrorMessage(err.code))
  })
})
