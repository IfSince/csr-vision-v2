import { LayoutGroup, m } from 'framer-motion'
import { Send } from '../../svg/icons/send.js'
import { Input } from './input.js'
import { TextArea } from './text-area.js'
import { Checkbox } from './checkbox.js'
import { validateCompany, validateEmail, validateName } from './validations.js'
import { useState } from 'react'
import { IconButton } from '../common/button/icon-button.js'

export const ContactForm = () => {
  const [errors, setErrors] = useState({
    email: null,
    name: null,
    company: null,
  })

  const updateError = field => setErrors({ ...errors, [field]: null })

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
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log('Form successfully submitted! TODO hier noch SuccessMessage rein')) //TODO hier noch success message rein
        .catch(error => console.log(error))
    } else {
      console.log('Die Form hat noch Fehler') // TODO Button noch so stylen, dass das klar wird
    }
  }

  return (
    <m.form className="grid text-xl col-full-width md:grid-cols-1 xl:grid-cols-[repeat(2,minmax(0,1fr))_min-content] *:border-secondary/20"
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={ handleSubmit }
            layout>
      <input type="hidden" name="form-name" value="contact"/>
      <label className="hidden">
        Don’t fill this out if you’re human: <input name="bot-field"/>
      </label>

      <div className="border-t xl:border-r xl:border-b">
        <LayoutGroup>
          <Input placeholder="Email..." name="email" error={ errors.email } updateError={ updateError }/>
          <Input placeholder="Name..." name="name" error={ errors.name } updateError={ updateError }/>
          <Input placeholder="Unternehmen..." name="company" error={ errors.company } updateError={ updateError }/>
          <TextArea placeholder="Deine Nachricht..." name="message"/>
        </LayoutGroup>
      </div>

      <div className="flex flex-col border-t">
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

      <div className="p-[var(--horizontal-spacing)] flex xl:items-end justify-end border-b xl:border-t">
        <IconButton theme="dark" size="lg" type="submit" magneticMultiplier={ 35 }>
          <Send className="h-full w-full p-[0.35em]"/>
        </IconButton>
      </div>
    </m.form>
  )
}