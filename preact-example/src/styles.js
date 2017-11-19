export const breakpoints = {
  $large: `1080px`,
  $medium: `720px`,
  $small: `640px`
}

export const colors = {
  $grey_light: `#eee`,
  $grey_mid_light: `#aaa`,
  $grey_mid: `#444`,
  $grey_dark: `#333`,
  $white: `#fff`,
  $black: `#000`,
  $green: `#79a11d`,
  $red: `#fa5c5c`
}

export const button = () => {
  return `
  font-size: 14px;
  background: ${colors.$grey_dark};
  color: ${colors.$white};
  cursor: pointer;
  display: block;
  padding: 8px 10px;
  margin-bottom: 5px;
  outline: none;
  transition: 200ms background ease-in-out;

  &:hover {
    background: ${colors.$grey_mid};
  }
  `
}
