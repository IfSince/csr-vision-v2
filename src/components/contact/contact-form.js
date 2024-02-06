import { LayoutGroup, m } from 'framer-motion'
import { Send } from '../../svg/icons/send.js'
import { Input } from './input.js'
import { TextArea } from './text-area.js'
import { Checkbox } from './checkbox.js'
import { validateCompany, validateEmail, validateName } from './validations.js'
import { useState } from 'react'
import { SubmitIconButton } from '../common/button/submit-icon-button.js'
import { Success } from '../../svg/icons/success.js'
import { Error } from '../../svg/icons/error.js'
import { Loading } from './loading.js'

const formVariants = {
  initial: {
    height: 0,
  },
  animate: {
    height: 'auto',
    transition: { duration: 1, delay: 0.9, ease: [.73, 0, .1, 1] },
  },
  exit: {
    height: 0,
    transition: { duration: 1, delay: 0.9, ease: [.73, 0, .1, 1] },
  },
}

const message = {
  initial: {
    opacity: 0,
    y: 50,
  },
  exit: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 2.1, ease: [.3, .67, .32, .96] },
  },
}

export const ContactForm = () => {
  const [errors, setErrors] = useState({
    email: null,
    name: null,
    company: null,
  })
  const [status, setStatus] = useState('default')

  const updateError = field => {
    setErrors({ ...errors, [field]: null })
  }

  const validate = ({ email, name, company }) => {
    let emailErrors = validateEmail(email)
    let nameErrors = validateName(name)
    let companyErrors = validateCompany(company)

    setErrors({ email: emailErrors, name: nameErrors, company: companyErrors })

    return !!emailErrors?.length || !!nameErrors?.length || !!companyErrors?.length
  }


  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const values = Object.fromEntries(formData.entries())

    const hasErrors = validate(values)

    if (!hasErrors) {
      setStatus('loading')

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => setStatus('success'))
        .catch(() => setStatus('apiError'))
    }
  }

  return (
    <>
      <m.div className="mb-4 overflow-hidden border-t col-full-width border-secondary/20 md:mb-6 xl:mb-8"
             variants={ formVariants }
             initial="initial"
             animate={ status === 'success' || status === 'apiError' ? 'exit' : 'animate' }
             transition={ { duration: 1, ease: [.73, 0, .1, 1] } }>
        <m.form className="grid text-xl col-full-width md:grid-cols-1 xl:grid-cols-[repeat(2,minmax(0,1fr))_min-content] *:border-secondary/20"
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={ handleSubmit }
                layout>
          <input type="hidden" name="form-name" value="contact"/>

          <div className="xl:border-r xl:border-b">
            <LayoutGroup>
              <Input placeholder="Email..." name="email" error={ errors.email } updateError={ updateError }/>
              <Input placeholder="Name..." name="name" error={ errors.name } updateError={ updateError }/>
              <Input placeholder="Unternehmen..." name="company" error={ errors.company } updateError={ updateError }/>
              <TextArea placeholder="Deine Nachricht..." name="message"/>
            </LayoutGroup>
          </div>

          <div className="flex flex-col border-t xl:border-t-0">
            <LayoutGroup>
              <m.div className="grow border-secondary/20 border-b py-4 px-[min(3rem,var(--horizontal-spacing))] xl:border-r" layout>
                Ich interessiere mich für...
              </m.div>
              <div className="flex flex-wrap">
                <Checkbox id="layout-nachhaltigkeits-pdf">Layout Nachhaltigkeits-PDF</Checkbox>
                <Checkbox id="web">Webauftritt</Checkbox>
                <Checkbox id="video-social-media">Videodreh (Social Media)</Checkbox>
                <Checkbox id="video-longform">Videodreh (Longform Content)</Checkbox>
                <Checkbox id="social-media-posts">Social Media Beiträge</Checkbox>
                <Checkbox id="foto-shootings">Fotoshootings</Checkbox>
                <Checkbox id="copy-report">Copywriting (Bericht)</Checkbox>
                <Checkbox id="copy-blog">Copywriting (Blog)</Checkbox>
                <Checkbox id="seo-consulting">SEO Beratung</Checkbox>
                <Checkbox id="ai-content-creation">AI Content Creation</Checkbox>
              </div>
            </LayoutGroup>
          </div>

          <div className="p-[var(--horizontal-spacing)] flex xl:items-end justify-end border-b">
            <SubmitIconButton hasErrors={ !!errors.email?.length || !!errors.name?.length || !!errors.company?.length }>
              {
                status === 'default' &&
                (
                  !!errors.email?.length || !!errors.name?.length || !!errors.company?.length
                    ? <Error className="h-full w-full p-[0.25em]"/>
                    : <Send className="h-full w-full p-[0.35em]"/>
                )
              }
              { status === 'success' && <Success className="h-full w-full p-[0.3em]"/> }
              { status === 'loading' && <Loading/> }
              { status === 'apiError' && <Error className="h-full w-full p-[0.25em]"/> }
            </SubmitIconButton>
          </div>
        </m.form>
      </m.div>

      <m.p className={ `mb-14 max-w-sm text-2xl sm:mb-16 md:mb-20 md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl md:col-start-5` }
           variants={ message }
           initial="initial"
           animate={ status === 'success' || status === 'apiError' ? 'exit' : 'initial' }>
        {
          status === 'success'
            ? 'Vielen Dank für deine Anfrage. Wir werden uns schnellstmöglich bei dir zurückmelden.'
            : 'Leider ist auf unserer Seite etwas schief gelaufen. Bitte versuche es später nochmal.'
        }
      </m.p>
    </>
  )
}