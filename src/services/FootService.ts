import {Request, Response, NextFunction, json} from 'express';
import axios from 'axios';

class FootService
{
    public static Index = (req: Request, res: Response, next: NextFunction) => {
        res.render('index');
    };

    public static GetFood = async (req: Request, res: Response, next: NextFunction) => {
        await axios.get("https://uavvdvkfxj.execute-api.ap-southeast-1.amazonaws.com/dev_food/get-food")
            .then(response => {
                res.status(200).json({
                    message: response.data,
                });
            }).catch(error => {
                res.status(200).json({
                    message: 'Nhịn',
                });
            });

        // const response = await axios.get("https://uavvdvkfxj.execute-api.ap-southeast-1.amazonaws.com/dev_food/get-food");
        // if (response.status === 200) {
        //     const data = response.data;
        //     res.status(200).json({
        //         message: data,
        //     });
        // }
        //
        // res.status(200).json({
        //     message: 'Nhịn',
        // });
    };
}

export default FootService;
