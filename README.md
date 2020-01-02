CKEditor 5 document editor build
========================================

[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-decoupled-document.svg)](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)
[![Build Status](https://travis-ci.org/ckeditor/ckeditor5-build-decoupled-document.svg?branch=master)](https://travis-ci.org/ckeditor/ckeditor5-build-decoupled-document)
<br>
[![Dependency Status](https://david-dm.org/ckeditor/ckeditor5-build-decoupled-document/status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-decoupled-document)
[![devDependency Status](https://david-dm.org/ckeditor/ckeditor5-build-decoupled-document/dev-status.svg)](https://david-dm.org/ckeditor/ckeditor5-build-decoupled-document?type=dev)

The document editor build for CKEditor 5, featuring the decoupled UI editor implementation. Read more about the [document editor build](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#document-editor) and see the [demo](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/document-editor.html).

![CKEditor 5 decoupled document editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-decoupled-document.png)

## Documentation

See:

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

First, install the build from npm:

```bash
npm install --save @ckeditor/ckeditor5-build-decoupled-document
```

And use it in your website:

```html
<div id="toolbar-container"></div>
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js"></script>
<script>
	DecoupledEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			// The toolbar needs to be explicitly appended.
			document.querySelector( '#toolbar-container' ).appendChild( editor.ui.view.toolbar.element );

			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

Or in your JavaScript application:

```js
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

// Or using the CommonJS version:
// const DecoupledEditor = require( '@ckeditor/ckeditor5-build-decoupled-document' );

DecoupledEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		// The toolbar needs to be explicitly appended.
		document.querySelector( '#toolbar-container' ).appendChild( editor.ui.view.toolbar.element );

		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).
## CKEditor5 Custom build
O CKEditor custom é o editor de texto do projeto e esta presente em todas as partes do curso entre descrição, lições e quiz. Usamos o [ckeditor-decoupled](https://github.com/ckeditor/ckeditor5-build-decoupled-document) como base
### Get started

 1.  Mudar o local da pasta raiz
    	 - `cd libs/ckeditor5`

 2. Instalar dependências NPM
        	 - execute `npm install`

Após isso o projeto está pronto para receber um plugin que poderá ser encontrados [aqui](https://www.npmjs.com/search?q=ckeditor5) ou [aqui](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/plugins.html)

### Instalando Plugins

 1. Execute `npm i my-custom-plugin --save`
 2. Edite o arquivo que está localizado em `src/ckeditor.js`
	 2.1 Importe o o plugin no inicio do arquivo e abaixo dos demais imports

    	 import  CustomPlugin from  '@ckeditor/CustomPlugin/src/CustomPlugin'; <-- adicione isso
	2.2 Adicione o plugin em `DecoupledEditor.builtinPlugins = [..., CustomPlugin]`
	2.3 por fim adicione ele na toolbar em:

	    DecoupledEditor.defaultConfig = {
		    toolbar: {
				  items: [
						[...]
						'CustomPlugin'
				]
			}
### Instalando o Yarn para gerar a build
Entre no [site](https://yarnpkg.com/en/docs/install#windows-stable) do Yarn escolha a versão compatível com seu sistema e instale-a.

### Gerando a build
Na raiz do projeto execute `yarn run build`

### Instalando o a build custom no WebApplication

 1. Copie o conteúdo gerado pela build na basta `libs/ckeditor5/build`
 2. Cole em `WebApplication/src/assets/javascripts/ck-editor-custom`

### Referências
[https://github.com/ckeditor/ckeditor5-media-embed/blob/master/src/mediaembedediting.js](https://github.com/ckeditor/ckeditor5-media-embed/blob/master/src/mediaembedediting.js)
[https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_mediaembed-MediaEmbedConfig.html#member-previewsInData](https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_mediaembed-MediaEmbedConfig.html#member-previewsInData)
[https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html)

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).
