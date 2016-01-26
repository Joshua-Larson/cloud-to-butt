walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	// I stole this extension from the creator of 
	//cloud-to-butt but it's on github so it's chill
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\n([Ss][Oo],?)?.*[Ll]et?'s\s[Nn]ot\s[Mm]eet\b/g, "---");
	
	textNode.nodeValue = v;
}


