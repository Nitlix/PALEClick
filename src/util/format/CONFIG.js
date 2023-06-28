const CONFIG =  {
    metadata: '0.0.1',
    trigger: "home",
    click: "left",
    selected: "jitter",
    types: {
        jitter: {
            group: {
                clicks: 1,
                cooldown: {
                    amount: 0,
                    range: 0
                }
            },

            overdrive: {
                chances: {
                    spike: 0.02,
                    drop: 0.01
                },
                amounts: {
                    spike: {
                        amount: -2,
                        range: 1
                    },
                    drop: {
                        amount: 0.5,
                        range: 0.25
                    }
                }
            },


            drive: {
                default: 70,
                roam: 10,

                amount: 2,
                chance: 0.05,
            },

            global: {
                range: 2
            },

            delay: {
                multiplier: 0.65,
                range: 0.2
            }
        }




        
    }
}

module.exports = CONFIG;