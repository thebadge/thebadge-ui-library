import * as React from 'react'
import { IconProps } from '../IconProps'

export const IconCurator = (props: IconProps) => (
  <a className={'icon ' + (!props.link ? 'icon--disabled' : '')} href={props.link} target={'_blank'} rel="noreferrer">
    <svg width="74" height="78" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m38.186 53.536 2.686 3.913c.699 1.012 1.401 2.02 2.09 3.04.641.94.328 1.706-.796 1.948-1.388.304-2.78.582-4.168.895-.231.06-.434.2-.573.394-.855 1.276-1.688 2.57-2.52 3.86-.654 1.006-1.5 1.033-2.185.044-1.666-2.4-3.286-4.835-5.005-7.199a10.597 10.597 0 0 0-2.015-1.934c-.604-.484-1.07-.398-1.648.143-.501.48-.953 1.003-1.446 1.486-.39.381-.828.65-1.432.332l-2.946 4.275-2.024 2.973c-.618.895-1.5.895-2.09 0-.856-1.303-1.688-2.619-2.557-3.908a1.2 1.2 0 0 0-.662-.448c-1.402-.322-2.816-.605-4.226-.895-.95-.202-1.303-1.017-.762-1.823 1.16-1.719 2.337-3.424 3.533-5.17-.694-.332-.717-.95-.699-1.576.018-.627.08-1.191.076-1.791 0-.846-.232-1.146-1.056-1.343-.636-.148-1.285-.21-1.93-.331-1.19-.215-1.486-.726-1.088-1.88.188-.542.426-1.07.61-1.617.322-.953.152-1.37-.73-1.83-.565-.292-1.155-.53-1.71-.834-.94-.519-1.048-.989-.421-1.849.398-.541.86-1.038 1.253-1.58.502-.698.484-1.124-.09-1.75-.447-.497-.975-.932-1.441-1.415-.77-.801-.716-1.343.197-1.974.55-.385 1.142-.717 1.683-1.11.663-.484.766-.896.421-1.648-.295-.627-.667-1.218-.936-1.85-.358-.84-.13-1.342.735-1.67.667-.232 1.37-.375 2.041-.595.896-.281 1.133-.698 1.003-1.611-.09-.645-.237-1.285-.322-1.934-.13-1.052.21-1.442 1.267-1.442.573 0 1.15.063 1.728.085 1.132.04 1.481-.246 1.656-1.343.108-.685.17-1.379.331-2.046.184-.752.591-.98 1.343-.77.645.188 1.263.448 1.899.68 1.088.381 1.46.234 1.996-.792.291-.56.524-1.155.838-1.705.479-.824.953-.94 1.737-.376.546.393 1.034.86 1.58 1.253.77.569 1.218.537 1.876-.125.448-.448.895-.958 1.37-1.406.756-.712 1.29-.658 1.898.193.403.56.743 1.163 1.15 1.723.506.685.927.784 1.697.416.627-.295 1.213-.671 1.84-.958.896-.42 1.41-.21 1.742.735.21.595.336 1.222.52 1.826.317 1.008.644 1.267 1.66 1.133.591-.063 1.173-.202 1.764-.296 1.155-.188 1.625.215 1.594 1.393 0 .649-.085 1.302-.085 1.956 0 .784.233 1.07 1.011 1.227.699.143 1.41.197 2.11.327 1.01.188 1.288.653.97 1.647-.192.604-.447 1.182-.662 1.79-.318.945-.17 1.344.703 1.792.577.308 1.19.55 1.76.868.93.52 1.029 1.003.398 1.854-.412.56-.896 1.07-1.28 1.634-.448.644-.448 1.06.098 1.652.447.51 1.003.953 1.477 1.455.752.805.708 1.289-.179 1.938-.528.385-1.106.703-1.634 1.084-.766.555-.895.989-.448 1.83.296.605.672 1.17.945 1.791.412.896.192 1.402-.761 1.729-.6.205-1.222.335-1.827.523-1.03.318-1.285.726-1.119 1.791.09.586.246 1.168.309 1.76.116 1.092-.21 1.432-1.312 1.445a37.005 37.005 0 0 0-.81-.009ZM9.229 52.99v1.38a.492.492 0 0 0 .632.545 84.157 84.157 0 0 0 1.992-.313c1.316-.215 1.952.166 2.346 1.433.174.568.3 1.15.479 1.719.25.788.497.895 1.226.546.448-.215.896-.48 1.317-.716 1.419-.77 2.108-.605 2.995.738.3.448.564.918.895 1.343.403.565.658.6 1.164.14.412-.377.774-.807 1.16-1.205 1.07-1.106 1.79-1.155 2.995-.193.447.345.85.721 1.302 1.048.542.39.761.34 1.084-.255.322-.596.577-1.209.895-1.79.542-1.035 1.169-1.29 2.283-.923.6.201 1.182.447 1.791.662.743.247.985.108 1.124-.653.103-.546.157-1.102.237-1.652.215-1.437.873-1.957 2.324-1.858.595.04 1.19.058 1.79.076.448 0 .699-.201.632-.672a68.5 68.5 0 0 0-.3-1.875c-.246-1.402.143-2.05 1.5-2.454.496-.148 1.002-.264 1.5-.412.962-.29 1.07-.555.604-1.46-.229-.447-.497-.863-.73-1.306-.64-1.218-.448-1.92.663-2.687.523-.358 1.074-.675 1.584-1.047.51-.372.533-.631.099-1.084-.434-.452-.98-.922-1.442-1.41-.832-.895-.895-1.526-.165-2.511.38-.529.828-1.012 1.217-1.536.39-.524.39-.765-.246-1.12-.636-.353-1.177-.563-1.755-.868-1.083-.573-1.343-1.155-.958-2.314.206-.64.488-1.254.694-1.894.206-.64.054-.846-.591-.971-.528-.103-1.061-.162-1.598-.224-1.531-.175-1.997-.699-1.952-2.239 0-.56.094-1.114.085-1.67 0-.73-.215-.895-.931-.779-.645.095-1.285.251-1.934.318-1.231.135-1.791-.237-2.136-1.423-.183-.605-.313-1.232-.515-1.827-.233-.69-.447-.788-1.123-.479-.52.242-1.012.546-1.523.81-1.289.667-1.965.497-2.789-.703-.344-.505-.653-1.043-1.016-1.54-.363-.496-.609-.568-1.06-.12-.453.447-.99 1.025-1.5 1.513-.82.783-1.433.837-2.365.179-.581-.408-1.11-.896-1.683-1.307-.492-.367-.72-.327-1.016.201-.296.528-.542 1.088-.806 1.652-.663 1.316-1.28 1.563-2.66 1.066-.554-.206-1.105-.448-1.67-.618-.563-.17-.814-.08-.944.546-.13.627-.17 1.218-.26 1.826-.205 1.397-.76 1.854-2.18 1.791-.479-.027-.958-.076-1.437-.09-1.043 0-1.168.126-1.011 1.178.067.448.174.896.241 1.343.229 1.558-.156 2.136-1.683 2.539-.448.12-.895.215-1.343.353-.945.296-1.057.573-.609 1.478.161.322.35.64.528.958.833 1.517.65 2.216-.823 3.134-.426.268-.86.519-1.258.814-.56.408-.56.654-.112 1.142.447.488.917.895 1.365 1.343.895.895.954 1.62.184 2.641-.372.493-.793.945-1.16 1.438-.448.59-.403.805.255 1.163.658.359 1.29.596 1.898.954.936.542 1.133 1.097.82 2.131-.112.367-.264.72-.394 1.084-.13.362-.26.72-.363 1.087a.546.546 0 0 0 .448.77c.412.09.828.166 1.244.22 2.252.273 2.593.671 2.45 2.896Zm19.076 7.427c1.567 2.27 3.197 4.648 4.84 7.011.448.632.922.6 1.343-.058.868-1.343 1.72-2.686 2.614-4.007.174-.233.422-.4.703-.474 1.424-.327 2.857-.605 4.28-.896.761-.165.931-.568.506-1.195-1.605-2.346-3.22-4.687-4.844-7.024a.645.645 0 0 0-.385-.296c-.944-.062-1.518.121-1.692 1.048-.13.694-.197 1.406-.336 2.1-.21 1.047-.671 1.311-1.697.98-.582-.193-1.146-.448-1.728-.636-.99-.331-1.383-.165-1.858.77-.268.533-.479 1.097-.787 1.599a9.38 9.38 0 0 1-.959 1.078Zm-16.117-5.394c-.55.094-1.289.21-2.023.362a.645.645 0 0 0-.336.278c-1.179 1.71-2.353 3.42-3.523 5.13-.394.583-.206 1.021.488 1.174 1.446.313 2.896.595 4.333.926.282.074.53.241.703.475.896 1.343 1.791 2.735 2.687 4.096.367.555.864.555 1.24 0 1.63-2.349 3.251-4.706 4.866-7.073a.55.55 0 0 0 0-.488 19.436 19.436 0 0 0-.99-1.558c-.563-.846-.98-.936-1.929-.488-.515.255-1.003.568-1.522.819-1.092.533-1.616.304-1.988-.864-.201-.64-.34-1.303-.56-1.934-.219-.631-.532-.864-1.428-.855h-.018Z"
        fill={`${props.color}`}
        stroke={`${props.color}`}
      />
      <path
        d="M23.792 51.656a12.791 12.791 0 1 1 11.828-7.892 12.782 12.782 0 0 1-11.828 7.892Zm-.04-.398a12.388 12.388 0 1 0-12.347-12.603 12.36 12.36 0 0 0 12.347 12.603Z"
        fill={`${props.color}`}
        stroke={`${props.color}`}
      />
      <path d="M23.497 18.764V1h48.826v76h-49.35V59.728" stroke={`${props.color}`} />
      <path
        d="M66.645 8.154H35.061v7.4h31.584v-7.4Zm-18.01 49.354h17.518m-17.518 4.441h17.518M48.635 66.39h17.518"
        stroke={`${props.color}`}
      />
    </svg>
  </a>
)
