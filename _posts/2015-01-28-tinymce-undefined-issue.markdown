---
layout: post
status: publish
title: TinyMCE Undefined Issue
date: '2015-01-28 12:39:28 -0400'
date_gmt: '2015-01-28 12:39:28 -0400'
categories:
- Tech
tags:
- tinyMCE
- JavaScript
- WordPress
- WYSIWYG
- wp_editor
---

WordPress supports a very rich WYSIWYG editor in terms of TinyMCE. It works perfectly well when we, ( here I'm referring to all the geeky developers :godmode: :wink: ) do not temper with the content of TinyMCE through JS code. In a nutshell, it is smooth and valid. But it happens very rare that we do not have to customize the way a feature behaves by default. So in this case, we may have to add new content or update the existing content or in some cases clear out the content in the editor.

On the first thought, our mind comes with this great and very simple idea that let's write this awesome JS code bound to some event which would add/update/remove the content using TinyMCE API that is exposed to common developer. So we write some sort of following pseudo logic.

```javascript
jQuery(document).ready(function($) {

	$(".class-to-update-content").on("click", function(e) {
		tinyMCE.get("tinymce-editor-id").setContent("New Content in Editor");
	});

	$(".class-to-get-content").on("click", function(e) {
		$("div.display-block").html( tinyMCE.get("tinymce-editor-id").getContent() );
	});
});
```


We feel like we're on the top of the world after writing this cool piece of code :innocent:. We are all set to test out the code on our webpage. At first, it might have worked on our local environment. And we think that this is the code that's going to work and immediately push to code to staging environment. And that's where the catch comes and it traps us. Someone from the QA team or some other developer reports a bug saying WYSIWYG editor is not working and you're like What the Fish :open_mouth: !

And then you check and you find that JS code is really breaking the editor and you may see following error or similar one.

![TinyMCE Undefined Issue](/uploads/2015/01/tinymce-undefined-issue-1.png)

The real issue here is that TinyMCE has not finished initializing itself when you get the error. It has to load a script from the configured `script_url`. That may take a while.

One solution out of WordPress is that you make use of a callback such as [oninit](http://www.tinymce.com/wiki.php/Configuration3x:oninit).

```javascript
function myCustomOnInit() {
	alert("We are ready to rumble!!");
	// So here you can bind your events and other stuff.
}
tinyMCE.init({
	...
	oninit : myCustomOnInit
});
```

But in WordPress environment, initialization of TinyMCE is not in our control. Because WordPress handles that itself.

So for that we have to put a fallback to prevent this error as follows:

```javascript
jQuery(document).ready(function($) {

	function myCustomSetContent( id, content ) {
		// Check if TinyMCE is defined or not.
		if( typeof tinymce != "undefined" ) {
			var editor = tinymce.get( id );
			// Check if TinyMCE is initialized properly or not.
			if( editor && editor instanceof tinymce.Editor ) {
				editor.setContent( text );
				editor.save( { no_events: true } );
			} else {
				// Fallback
				// If TinyMCE is not initialized then directly set the value in textarea.
				//TinyMCE will take up this value when it gets initialized.
				jQuery( '#'+id ).val( text );
			}
			return true;
		}
		return false;
	}

	function myCustomGetContent( id ) {
		// Check if TinyMCE is defined or not.
		if( typeof tinymce != "undefined" ) {
			var editor = tinymce.get( id );
			// Check if TinyMCE is initialized properly or not.
			if( editor && editor instanceof tinymce.Editor ) {
				return editor.getContent();
			} else {
				// Fallback
				// If TinyMCE is not initialized then directly set the value in textarea.
				// TinyMCE will take up this value when it gets initialized.
				return jQuery( '#'+id ).val();
			}
		}
		return '';
	}

	$(".class-to-update-content").on("click", function(e) {
		myCustomSetContent( "tinymce-editor-id", "New Content in Editor" );
	});

	$(".class-to-get-content").on("click", function(e) {
		$("div.class-to-display-content").html( myCustomGetContent( "tinymce-editor-id" ) );
	});
});
```

This way we can fix this sort of TinyMCE undefined
issues.

Hope this helps :smile:
