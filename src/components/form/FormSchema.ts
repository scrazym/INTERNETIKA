import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Введите заголовок')
    .matches(
      /^[А-ЯЁ]+$/iu,
      'Введите заголовок без пробелов, тире и только кирилицей',
    )
    .min(3, 'минимум 3 символа'),
  descr: Yup.string()
    .required('Введите описание')
    .matches(
      /^[А-ЯЁ\s-]+$/iu,
      'Введите заголовок без пробелов, тире и только кирилицей',
    )
    .min(10, 'минимум 10 символов'),
  images: Yup.array()
    .min(1, 'Минимум 1 картинка')
    .required('Обязательно для заполнения'),
});
