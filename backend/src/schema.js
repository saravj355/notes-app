const yup = require('yup');

const schema = yup.object().shape({
    title: yup().string().require(),
    body: yup().string().require(),
    creation_date : yup().date().require(),
});

schema.validate({
    title: 'test1',
    body: 'test1',
    creation_date: '02/13/2021'

}).then(result => console.log(result))
    .catch(err => {console.log('Error: ' + err );});
    
