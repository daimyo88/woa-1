import React, { FC } from 'react';
import { Paper, Typography } from '@mui/material';

import PageTitle from '../components/text/PageTitle/PageTitle';
import StyledExternalLink from '../components/text/StyledExternalLink/StyledExternalLink';
import CtaLink from '../components/buttons/CtaLink/CtaLink';
import FullscreenContainer from '../components/containers/FullscreenContainer/FullscreenContainer';

const Page: FC = () => {
    return (
        <FullscreenContainer>
            <PageTitle text="About" />
            <Paper sx={{mb: '15px', p: '15px 15px 20px'}}>
                <Typography variant="h2" color="secondary">About the project</Typography>
                <Typography paragraph>This is just a light anime library that is based on data from <StyledExternalLink url="https://myanimelist.net" text="MyAnimeList.net"/> provided 
                via <StyledExternalLink url="https://docs.api.jikan.moe" text="Jikan REST API"/>. The main goal with this project for me as a developer was to harness my skills, but on the other hand to create something fun and useful (at least I hope so). 
                The website doesn't contain any information, that can't be found on <StyledExternalLink url="https://myanimelist.net" text="MyAnimeList.net"/>, but the general idea was to provide functional search tool and only general information about anime (to make UI lighter) as well as links to external sources, where more information can be found.  
                </Typography>
                <Typography paragraph>
                    Technical stack/libraries used in this project: <br />
                    React, TypeScript, Redux (Redux Toolkit), Material UI, Axios, Formik (with Yup), date-fns.
                </Typography>
                <Typography variant="h2" color="secondary">About the author</Typography>
                <Typography paragraph>
                    Hi! My name is Denys and I'm a web developer from Ukraine. I've been working with different web technologies since 2016, but at the time this project was written I had been focusing on React and related technologies. If you found this project interesting or useful, or found a bug, I would really appreciate to receive a message from you!
                </Typography>
                <CtaLink url='/contact' icon={null} text='CONTACT ME' />
            </Paper>
        </FullscreenContainer>
    )
}

export default Page;