import { __ } from '@wordpress/i18n'
import PropTypes from 'prop-types'
import { compose } from '@wordpress/compose'
import { withSelect, withDispatch } from '@wordpress/data'
import { PluginDocumentSettingPanel } from '@wordpress/edit-post'
import { PanelRow, TextControl, CheckboxControl } from '@wordpress/components'
import json from '../../data/project-definition'
const { label, prefix, key, customFields } = json


console.log( 'bigup-cpt-project-metabox PLUGIN LOADED' )

/**
 * Add a metabox for all post custom fields.
 * 
 * @see https://kinsta.com/blog/wordpress-add-meta-box-to-post/ 
 */
const MetaBox = ( { postType, metaFields, setMetaFields } ) => {

	if ( postType !== key ) return null

	// Dynamically build an object array of meta fields for output in the panel.
	let fields = []
	customFields.forEach( customField => {
		const metaKey = prefix + key + customField.suffix
		fields.push( {
			'metaKey': metaKey,
			'value': ( metaFields[ metaKey ] ) ? metaFields[ metaKey ] : '',
			'updateValue': ( newValue ) => setMetaFields( { [ metaKey ]: newValue } ),
			'label': customField.label,
			'description': customField.description,
			'type': customField.input_type,
			'placeholder': customField.placeholder,
			'required': customField.required,
			'maxlength': customField.length_limit,
			'min': customField.number_min ?? '',
			'max': customField.number_max ?? '',
			'step': customField.number_step ?? '',
		} )
	} )

	return(
		<>
			{ fields.map( ( field ) => (
				<PluginDocumentSettingPanel
					key={ field.metaKey }
					name={ field.metaKey + '-panel' }
					title={ field.label } 
					initialOpen={ true }
				>
					{ ( field.type ==='text' || field.type === 'url' ) &&
						<PanelRow>
							<TextControl
								label={ field.description }
								value={ field.value }
								onChange={ field.updateValue }
								type={ field.type }
								placeholder={ field.placeholder }
								required={ field.required }
								maxLength={ field.maxlength }
							/>
						</PanelRow>
					}
					{ field.type === 'number' &&
						<PanelRow>
							<TextControl
								label={ field.description }
								value={ field.value }
								onChange={ field.updateValue }
								type={ field.type }
								min={ field.number_min }
								max={ field.number_max }
								step={ field.number_step }
							/>
						</PanelRow>
					}
					{ field.type === 'checkbox' &&
						<PanelRow>
							<CheckboxControl
								label={ field.description }
								checked={ field.value }
								onChange={ field.updateValue }
							/>
						</PanelRow>
					}
				</PluginDocumentSettingPanel>
			) ) }
		</>
	)
}

const applyWithSelect = withSelect( ( select ) => {
	return {
		metaFields: select( 'core/editor' ).getEditedPostAttribute( 'meta' ),
		postType: select( 'core/editor' ).getCurrentPostType()
	}
} )

const applyWithDispatch = withDispatch( ( dispatch ) => {
	return {
		setMetaFields ( newValue ) {
			dispatch( 'core/editor' ).editPost( { meta: newValue } )
		}
	}
} )

export default compose( [
	applyWithSelect,
	applyWithDispatch
] )( MetaBox )

MetaBox.propTypes = {
	postType: PropTypes.string,
	metaFields: PropTypes.object,
	setMetaFields: PropTypes.func,
}
