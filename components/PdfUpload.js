"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { Uploady } from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button"; // Importación correcta
import UploadPreview from "@rpldy/upload-preview"; // Importación correcta
import { TusUploady } from "@rpldy/tus-uploady"; // Si quieres usar TUS para cargas grandes
import { FaCloudUploadAlt } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function PdfUpload() {
    const [progress, setProgress] = useState({}); // Objeto para rastrear el progreso de cada archivo
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleUploadProgress = (item) => {
        const updatedProgress = { ...progress };
        updatedProgress[item.id] = Math.round(item.completed * 100);
        setProgress(updatedProgress);

        // Actualizar la lista de archivos seleccionados
        setSelectedFiles(prevFiles => {
            const existingIndex = prevFiles.findIndex(file => file.id === item.id);
            if (existingIndex > -1) {
                const updatedFiles = [...prevFiles];
                updatedFiles[existingIndex] = item.file;
                return updatedFiles;
            } else {
                return [...prevFiles, item.file];
            }
        });
    };

    const handleUploadSuccess = (item) => {
        console.log("Archivo subido con éxito:", item);
        // Actualizar el progreso del archivo a 100%
        setProgress(prevProgress => ({ ...prevProgress, [item.id]: 100 }));
    };

    const handleUploadError = (item) => {
        console.error("Error al subir el archivo:", item);
        // Eliminar el progreso del archivo
        setProgress(prevProgress => {
            const updatedProgress = { ...prevProgress };
            delete updatedProgress[item.id];
            return updatedProgress;
        });
    };




    return (
        <div className="pt-24 pb-16 text-center">
            <h1 className="text-5xl font-bold mb-6">
                Chatea con cualquier PDF
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sube tu PDF y comienza a hacer preguntas al instante. Obtén respuestas precisas con citaciones de fuentes.
            </p>
<div>
            <Uploady
                destination={{ url: "/api/upload" }}
                fileFilter={({ file }) => file.type === "application/pdf"}
                maxFileSize={10 * 1024 * 1024}
                multiple // Habilita la carga múltiple
                listeners={{
                    ITEM_PROGRESS: handleUploadProgress,
                    ITEM_SUCCESS: handleUploadSuccess,
                    ITEM_ERROR: handleUploadError,
                }}
            >
                {/* <div className="max-w-xl mx-auto px-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                        <FaCloudUploadAlt className="mx-auto text-5xl text-gray-400 mb-4" />
                        <p className="text-lg text-gray-600">
                            Arrastra y suelta tus archivos PDF aquí o
                            <UploadButton className="text-primary font-medium ml-1">
                                selecciona archivos
                            </UploadButton>
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            Tamaño máximo por archivo: 10MB
                        </p>
                    </div>
                    {selectedFiles.length > 0 && (
                        <div className="mt-4">
                            <ul>
                                {selectedFiles.map((file) => (
                                    <li key={file.id}>
                                        <p>Archivo seleccionado: {file.name}</p>
                                        {progress[file.id] > 0 && (
                                            <div className="mt-2">
                                                <ProgressBar now={progress[file.id]} label={`${progress[file.id]}%`} />
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <UploadPreview previewComponentProps={{ showLoader: true }} />
                </div> */}
            </Uploady>
            </div>
        </div>
    );
}

