import { PiDropSimpleThin } from "react-icons/pi";

export let navList=[
    {
        'navName':'Color',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Add Color', 
               'link':'/add-color'
            },
            {
                'navName':'View Color', 
                'link':'/view-color'
             }

        ]
    },
    {
        'navName':'Size',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Add Size', 
               'link':'/size',
            },
            {
                'navName':'View Size', 
                'link':'/view-size',
             },
        ]
    },
    {
        'navName':'Parent Category',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Add Category', 
               'link':'/add-category'
            },
            {
                'navName':'View Category', 
                'link':'/view-category'
             }
        ]
    },
    {
        'navName':'Sub Category',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Add Sub category', 
               'link':'/add-sub-category'
            },
            {
                'navName':'View Sub Category', 
                'link':'/view-sub-category'
             }
        ]
    },
    {
        'navName':'Product',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Product Detail', 
               'link':'/product-details'
            },
            {
                'navName':'Product Items', 
                'link':'/product-items'
             }
        ]
    },
    {
        'navName':'Story',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Story Detail', 
               'link':'/story-details'
            },
            {
                'navName':'Story View', 
                'link':'/story-view'
             }
        ]
    },
    {
        'navName':'Orders',
        'icon': <PiDropSimpleThin />,
        'subMenu':[
            {
               'navName':'Slider Detail', 
               'link':'/slider-details'
            },
            {
                'navName':'Slider View', 
                'link':'/slider-view'
             }
        ]
    },
   
]