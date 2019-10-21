import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

    
  const images = [
    {
      id:'SyrupGallery',      
      url:
        require('/home/hadi/central/src/modules/icons/Balu_shahi.jpg'),
      title: 'Sugar Syrup Based',
      width: '40%',
    },
    {
      id:'LadduGallery',
      url:
        require('/home/hadi/central/src/modules/icons/laddoo.jpg'),
      title: 'Laddu',
      width: '20%',
    },
    {
      id:"HalvaGallery",
      url:
        require('/home/hadi/central/src/modules/icons/halva.png'),
      title: 'Halva',
      width: '40%',
    },
    {
      id:"BarfiGallery",
      url:
      require('/home/hadi/central/src/modules/icons/barfi.jpg'),
      title: 'Barfi',
      width: '38%',
    },
    {
      id:"MilkGallery",
      url:
      require('/home/hadi/central/src/modules/icons/milk.jpg'),
      title: 'Milk-Based',
      width: '38%',
    },
    {
      id:"FarsanGallery",
      url:
      require('/home/hadi/central/src/modules/icons/farsan.jpg'),
      title: 'Farsan',
      width: '24%',
    },
    {
      id:"DryFruitsGallery",
      url:
      require('/home/hadi/central/src/modules/icons/dryfruits.jpg'),
      title: 'Dryfruits',
      width: '40%',
    },
    {
      id:"PedhaGallery",
      url:
      require('/home/hadi/central/src/modules/icons/pedha.jpg'),
      title: 'Pedha',
      width: '20%',
    },
    {
      id:"FriedGallery",
      url:
      require('/home/hadi/central/src/modules/icons/fried.jpg'),
      title: 'Fried',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.id}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
              />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
                
                <Link to= {`/${image.id}`}>
                  
                  
              <Typography
              
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
                >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
             </Link>
             
            </div>
            
          </ButtonBase>
        ))}
      </div>
      
    </Container>
  
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);