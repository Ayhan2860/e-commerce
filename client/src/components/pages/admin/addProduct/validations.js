import * as yup from "yup";

const validationSchema =  yup.object().shape({
    title: yup.string().required("Ürün başlığı boş bırakılamaz"),
    description: yup.string().min(20, "Açıklama minimum 20 karakter olmalı").required("Açıklama boş bırakılamaz"),
    price: yup.string().required("Ücret kısmı boş bırakılamaz")
})

export default validationSchema