import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email("Geçerli bir email giriniz").required("Email boş geçilemez"),
    password: yup.string().min(5, "Parolanız minimum 5 karakter olmalıdır.").required("Parola boş geçilemez"),
    passwordConfirm: yup.string().oneOf([yup.ref('password')], "Parolanız uyuşmuyor").required("Parola onayı boş geçilemez")
});

export default validationSchema;