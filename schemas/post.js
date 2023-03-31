const textEditorStyles = [
	{ title: 'Paragraph', value: 'normal'},
	{ title: 'Heading 1', value: 'h1'},
	{ title: 'Heading 2', value: 'h2'},
	{ title: 'Heading 3', value: 'h3'},
	{ title: 'Bullet', value: 'bullet'},
	{ title: 'Numbered', value: 'number'},
	{ title: 'Quote', value: 'blockquote'},
]

export default {
  name: 'post',
  type: 'document',
	title: 'Post',
	groups: [
    {
			name:'content',
			title: 'Content',
    },
		{
			name: 'meta',
			title: 'Meta'
		}
	],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
			validation: Rule => Rule.required(),
			group: 'meta',
    },
		{
			name: 'title',
      type: 'string',
      title: 'Title',
			group: 'content',
			validation: Rule => Rule.required(),
		},
		{
			name: 'publishDate',
			type: 'date',
			title: 'Pablished Date',
			group: 'content',
			validation: Rule => Rule.required(),
		},
		{
			name: 'image',
      type: 'image',
      title: 'Image',
			group: 'content',
			validation: Rule => Rule.required(),
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
				},
				{
					name: 'attribution',
					type: 'string',
					title: 'Attribution',
				}
			]
		},
		{
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			group: 'content',
			validation: Rule => Rule.required(),
			options: {
				source: 'title',
				maxLength: 200, // will be ignored if slugify is set
				slugify: input => input
														 .toLowerCase()
														 .replace(/\s+/g, '-')
														 .slice(0, 200)
			}
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			group: 'content',
			validation: Rule => Rule.required(),
		},
		{
			name: 'body',
      title: 'Body content',
			group: 'content',
			validation: Rule => Rule.required(),
			type: 'array',
			of: [
				{
					type: 'block'
				},
				{
					type: 'image',
				}
			]
		}
  ]
}