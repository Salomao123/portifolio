import React from 'react';

import ApiConfig from '../../../config/ApiConfig';

class PortifolioService {

    async getPortifolios() {
        let ports = await ApiConfig.get("/portifolios/");

        if(ports) {
            console.log(ports)
        }
    }

}

export default PortifolioService;