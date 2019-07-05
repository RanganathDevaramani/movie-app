import React from 'react'
import axios from 'axios';
import { Icon } from 'react-icons-kit'
import { ic_star } from 'react-icons-kit/md/ic_star'
import { ic_star_half } from 'react-icons-kit/md/ic_star_half'
import { calendar } from 'react-icons-kit/fa/calendar'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { NavigateBefore } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Fab, Container, Grid } from '@material-ui/core';
import { Button, Modal } from 'react-bootstrap'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: '40px'
    },
    img: {
        width: "100%",
        height: 'auto'
    },
    title: {
        fontSize: "50px"
    },
    text: {
        fontSize: "20px",
        marginTop: "40px",
        fontWeight: 600
    },
    back: {
        marginTop: "40px",
        backgroundColor: "#a83960",
        color: "white"
    },
    edit: {
        float: "rigth"
    },
    fab: {
        float: "right",
        marginBottom: "40px",
        backgroundColor: "#a83960",
        color: "white"
    },
    fabDelete: {
        float: "right",
        marginBottom: "40px",
        backgroundColor: "#a83960",
        color: "white"
    },
    modal: {
        marginTop: "20px",
    }
});


class ModalComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {}
        }

    }

    render() {
        const {classes} = this.props
        return (
            <>
                {this.props.show && (
                    <Modal show={this.props.show} onHide={this.props.handleClose} className={classes.modal} size="lg">
                        <Modal.Body>
                            <Container fixed>
                                <div className={classes.root}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={3} lg={4}>
                                            <img src="https://via.placeholder.com/600/c2ce62" alt="show movies" className={classes.img} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <span className={classes.title}>{this.props.movies.title}</span>
                                            <br />
                                            <div style={{ color: 'yellow' }}>
                                                <Icon icon={ic_star} size={24} />
                                                <Icon icon={ic_star} size={24} />
                                                <Icon icon={ic_star} size={24} />
                                                <Icon icon={ic_star} size={24} />
                                                <Icon icon={ic_star_half} size={24} />
                                            </div>

                                            <br />
                                            <Icon icon={calendar} size={16} />{" "}<span>{this.props.movies.year}</span>
                                            <h5>{this.props.movies.genre}</h5>
                                            <h6>{this.props.movies.cast}</h6>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div>
                                    <p className={classes.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </Container>
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleClose}>
                                Close
                      </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </>
        )
    }

}

ModalComp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalComp);