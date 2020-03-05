/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Font from '@ckeditor/ckeditor5-font/src/font';

export default class GuiddleEditor extends DecoupledEditorBase {
}

// Plugins to include in the build.
GuiddleEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	Highlight,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Font
];

// Editor configuration.
GuiddleEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'alignment',
			'|',
			'indent',
			'outdent',
			'|',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		styles: [
			'full',
			'alignLeft',
			'alignRight'
		],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:full',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative'
		]
	},
	link: {
		decorators: {
			isExternal: {
				mode: 'manual',
				label: 'Open in a new tab',
				attributes: {
					target: '_blank'
				}
			}
		}
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	fontSize: {
		options: [
			10,
			11,
			12,
			13,
			14,
			'default',
			18,
			20,
			22,
			24,
			26,
			28,
			36,

		]
	},
	mediaEmbed: {
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en',
		previewsInData: true,
		providers: [
			{
				name: 'dailymotion',
				url: /^dailymotion\.com\/video\/(\w+)/,
				html: match => {
					const id = match[ 1 ];

					return (
						'<div style="position: relative; padding-bottom: 100%; height: 0; ">' +
						`<iframe src="https://www.dailymotion.com/embed/video/${ id }" ` +
						'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
						'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">' +
						'</iframe>' +
						'</div>'
					);
				}
			},
			{
				name: 'spotify',
				url: [
					/^open\.spotify\.com\/(artist\/\w+)/,
					/^open\.spotify\.com\/(album\/\w+)/,
					/^open\.spotify\.com\/(track\/\w+)/,
					/^open\.spotify\.com\/(show\/\w+)/,
					/^open\.spotify\.com\/(episode\/\w+)/,
					/^open\.spotify\.com\/(playlist\/\w+)/
				],
				html: match => {
					const id = match[ 1 ];

					return (
						'<div style="position: relative; height: 0; padding-bottom: 25%;">' +
						`<iframe src="https://open.spotify.com/embed/${ id }" ` +
						'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
						'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
						'</iframe>' +
						'</div>'
					);
				}
			},
			{
				name: 'youtube',
				url: [
					/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,
					/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,
					/^youtube\.com\/embed\/([\w-]+)/,
					/^youtu\.be\/([\w-]+)/
				],
				html: match => {
					const id = match[ 1 ];

					return (
						'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
						`<iframe src="https://www.youtube.com/embed/${ id }" ` +
						'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
						'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
						'</iframe>' +
						'</div>'
					);
				}
			},
			{
				name: 'vimeo',
				url: [
					/^vimeo\.com\/(\d+)/,
					/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,
					/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,
					/^vimeo\.com\/channels\/[^/]+\/(\d+)/,
					/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,
					/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,
					/^player\.vimeo\.com\/video\/(\d+)/
				],
				html: match => {
					const id = match[ 1 ];

					return (
						'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
						`<iframe src="https://player.vimeo.com/video/${ id }" ` +
						'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
						'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
						'</iframe>' +
						'</div>'
					);
				}
			}
		]
	}
};
