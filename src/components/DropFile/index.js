import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
// import DropZone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import img_upload from "../../assets/images/img_upload.png";

// eslint-disable-next-line react/prop-types
const DropFile = ({ setImage }) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    useEffect(() => {
        setImage(files[0]);
    }, [files, setImage]);

    const thumbs = files.map((file) => {
        return (
            <div key={file.name}>
                <div>
                    <img
                        src={file.preview}
                        style={{ width: "100%", height: "200px" }}
                        // Revoke data uri after image is loaded
                        onLoad={() => {
                            URL.revokeObjectURL(file.preview);
                        }}
                    />
                </div>
            </div>
        );
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className="container-dropzone mb-4 row">
            <div {...getRootProps({ className: "dropzone col text-center" })}>
                <input {...getInputProps()} />
                {/* {files[0] ? thumbs : <p>Drag and drop some files here, or click to select files</p>} */}
                {files[0] ? thumbs : <img src={img_upload} alt="Upload" />}
            </div>
        </section>
    );
};

export default DropFile;
