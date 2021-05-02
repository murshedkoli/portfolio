import ababiltraining from './screenshot/ababil-training-center.PNG';
import myshop from './screenshot/myshop.PNG';
import ababilitwebservice from './screenshot/ababil-it-web-service.PNG';
const projectData =[
    {
        thumb:ababiltraining,
        name: "Ababil Training Center",
        live:"https://ababil-it.web.app/",
        code:"https://github.com/murshedkoli/ababilItClient",
        features:['Anyone can apply for registration', 'admin can acept or reject application', 'admin can see all application',
         'people can see all registered student in student page', 'admin add payment ammount with a popup when accept the application']
    },
    {
        thumb:myshop,
        name: "My Shop Ecommerce Site",
        live:"https://affectionate-einstein-f7b6a0.netlify.app/",
        code:"https://github.com/murshedkoli/koli_shop_with_admin_panel",
        features:['Add New Product', 'Remove & Update Product', 'Customar Can add product in cart',
         'Order Cart Product and save in Database', 'Customar can manage order and update shiping address']
    },
    {
        thumb:ababilitwebservice,
        name: "Ababil It Web Service",
        live:"https://ababil-it-assignment-11.web.app",
        code:"https://github.com/murshedkoli/ababil-it-with-dynamic-service-review-blog-and-supper-admin-panel",
        features:['Add Service (admin)',
            'Remove Service (admin)',
            'Update Service (admin)',
            'Add Review (user)',
            'Add Post (user, andmin)',
            'Order Place after successfull Payment',
            'Admin Can Make any User as admin',
            'Admin Cam Remove Any Admin',
            'Loading gif when data not load...']
    }
]


export default projectData;