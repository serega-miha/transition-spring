import './menuThird.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const MenuThird = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }


  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        phone: '',
        terms: false
    },
    validationSchema: Yup.object({
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
                .required('Введите номер телефона'),
        name: Yup.string()
            .min(2, 'Минимум 2 символа')
            .required('Обязательное поле'),
        email: Yup.string()
            .email('Неправильный email')
            .required('Обязательное поле'),
        // currency: Yup.string().required('Выберите валюту'),
        // text: Yup.string()
        //         .min(10, 'Не менее 10 символов'),
        terms: Yup.boolean()
            .required('Необходимо согласие')
            .oneOf([true], 'Необходимо согласие')
    }),
    onSubmit: values => console.log(JSON.stringify(values, null, 2))

})




    return (
        <div className="form-container">
            <h2>This is the simple form</h2>
            <form className="from-simple-third" onSubmit={onSubmit}>
              <label htmlFor="name">
                <input type="text" name='name'  />
                Введите ваше имя:
              </label>
              
              <label htmlFor="email">
                <input type="email" name='email'  />
                Введите email:
              </label>
              
              <label htmlFor="phone">
                <input type="tel" name='phone'  />
                Введите телефон:
              </label>
              
              <br></br>
              <label htmlFor="checkbox">
                <input type="checkbox" name='checkbox'   className='checkbox-third'
                style={{opacity: 1, position: 'relative', pointerEvents: "all"}}
                />
                Вам есть 18?
              </label>
             
              <br></br>
              <button type='submit' className="btn-submit">Отправить данные</button>
            </form>

            <h2>Second form By formik</h2>
            <form className='from-simple-third' onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    {...formik.getFieldProps('name')}
                />
               {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
                <label htmlFor="email">Ваша почта</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
                 <label htmlFor="phone">Ваш телефон:</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? <div className='error'>{formik.errors.phone}</div> : null}
                <label className="checkbox">
                <input name="terms"
                style={{opacity: 1, position: 'relative', pointerEvents: "all"}}
                className='chackbox'
                    type="checkbox"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            
            <br></br>
            {formik.errors.terms && formik.touched.terms ? <div className='error'>{formik.errors.terms  }</div> : null}
            <br></br>
            <button type="submit" className="btn-submit">Отправить</button>
            </form>
      </div>
    )
}

export default MenuThird;