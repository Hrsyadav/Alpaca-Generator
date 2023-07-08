export const bodyParts={
    backgrounds:{blue50:'blue50',blue60:'blue60',blue70:'blue70',darkblue30:'darkblue30',darkblue50:'darkblue50',darkblue70:'darkblue70',
    green50:'green50',green60:'green60',green70:'green70',grey40:'grey40',grey70:'grey70',grey80:'grey80',red50:'red50',red60:'red60',
    red70:'red70',yellow50:'yellow50',yellow60:'yellow60',yellow70:'yellow70'},
    neck:{default:'default',bendBackward:'bend-backward',bendForward:'bend-forward',thick:'thick'},
    leg:{default:'default',bubbleTea:'bubble-tea',cookie:'cookie',gameConsole:'game-console',tiltBackward:'tilt-backward',tiltForward:'tilt-forward'},
    ears:{default:'default',tiltBackward:'tilt-backward',tiltForward:'tilt-forward'},
    accessories:{earings:'earings',flower:'flower',glasses:'glasses',headphone:'headphone'},
    hair:{default:'default',bang:'bang',curls:'curls',elegant:'elegant',fancy:'fancy',quiff:'quiff',short:'short'},
    eyes:{default:'default',angry:'angry',naughty:'naughty',panda:'panda',smart:'smart',star:'star'},
    mouth:{default:'default',astonished:'astonished',eating:'eating',laugh:'laugh',tongue:'tongue'}
};

export const initialBody={
    backgrounds:bodyParts.backgrounds.blue50,
    neck:bodyParts.neck.default,    
    leg:bodyParts.leg.default,
    ears:bodyParts.ears.default,
    hair:bodyParts.hair.default,
    eyes:bodyParts.eyes.default,
    accessories:bodyParts.accessories.glasses,
    nose:'nose',
    mouth:bodyParts.mouth.default  
}

export const reducer=(state,action)=>{  
    switch (action.type){
        case "Update":
            const data1=action.data;
            return ({...state,...data1});
        default:
            return state;
    }
};