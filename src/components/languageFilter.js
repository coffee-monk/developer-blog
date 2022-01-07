import React, { useState, useEffect, useContext } from "react"
import { BlogContext } from "../context/BlogContextProvider"
import { graphql, useStaticQuery } from "gatsby"

const LanguageFilter = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            languages
          }
        }
      }
    `
  )
  const languages = site.siteMetadata.languages

  const { dispatch } = useContext(BlogContext)

  const [dropdown, setDropdown] = useState(false)
  const [selectedLanguages, setSelectedLanguage] = useState([])

  function dropdownToggle() {
    setDropdown(!dropdown)
  }

  function clickLanguage(event) {
    const index = selectedLanguages.findIndex(
      language => language === event.target.id
    )
    if (!selectedLanguages.includes(event.target.id)) {
      setSelectedLanguage([...selectedLanguages, event.target.id])
      console.log(event.target.id)
    } else if (index !== -1) {
      setSelectedLanguage([
        ...selectedLanguages.slice(0, index),
        ...selectedLanguages.slice(index + 1),
      ])
    }
  }

  useEffect(() => {
    dispatch({
      type: "SET_LANGUAGE_FILTER",
      payload: selectedLanguages,
    })
  }, [selectedLanguages])

  let dropdownColor = dropdown ? "text-green-sol" : "text-magenta-sol"

  return (
    <div className="relative text-magenta-sol">
      <h2
        onClick={dropdownToggle}
        className={`${dropdownColor} cursor-pointer hover:text-blue-sol transition ease-out duration-200`}
      >
        Language
      </h2>
      {dropdown && (
        <ul className="absolute bottom-10 bg-base-03">
          {languages.map(language => {
            return (
              <li
                onClick={clickLanguage}
                id={language}
                className={`${
                  selectedLanguages.includes(language)
                    ? "text-cyan-sol"
                    : "text-magenta-sol"
                } py-4 font-bold cursor-pointer hover:text-cyan-sol`}
                key={language}
              >
                {language}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default LanguageFilter
